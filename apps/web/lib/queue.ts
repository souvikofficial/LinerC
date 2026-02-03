import { Queue, Worker, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';

const DISABLE_WORKERS = process.env.DISABLE_WORKERS === 'true';

let connection: any;
let settlementQueue: any;
let aggregatesQueue: any;

if (DISABLE_WORKERS) {
    // Provide stubbed implementations to avoid creating real network connections
    connection = { status: 'disabled', on: () => {}, once: () => {}, off: () => {} };

    class DummyQueue {
        name: string;
        constructor(name: string) { this.name = name; }
        async add(_name: string | object, _data?: any, _opts?: any) {
            console.warn(`Workers disabled; skipping enqueue to ${this.name}`);
            return { id: '0' };
        }
    }

    settlementQueue = new DummyQueue('enrich-settlement');
    aggregatesQueue = new DummyQueue('rollup-aggregates');
} else {
    connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
        maxRetriesPerRequest: null,
        retryStrategy: (times) => Math.min(times * 50, 2000), // simplistic retry
    });

    connection.on('error', (err: any) => {
        // Suppress crash in dev if Redis is down
        console.warn('Redis Connection Error (Worker might be inactive):', err?.message || err);
    });

    settlementQueue = new Queue('enrich-settlement', { connection });
    aggregatesQueue = new Queue('rollup-aggregates', { connection });
}

export { connection, settlementQueue, aggregatesQueue };

export function waitForReady(timeout = 3000) {
    if (DISABLE_WORKERS) return Promise.resolve();

    if (connection.status === 'ready') return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
        const onReady = () => {
            cleanup();
            resolve();
        };

        const timer = setTimeout(() => {
            cleanup();
            reject(new Error('Redis did not become ready in time'));
        }, timeout);

        function cleanup() {
            clearTimeout(timer);
            connection.off('ready', onReady);
        }

        connection.once('ready', onReady);
    });
}
