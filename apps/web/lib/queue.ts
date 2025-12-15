import { Queue, Worker, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null,
    retryStrategy: (times) => Math.min(times * 50, 2000), // simplistic retry
});

connection.on('error', (err) => {
    // Suppress crash in dev if Redis is down
    console.warn("Redis Connection Error (Worker might be inactive):", err.message);
});

export const settlementQueue = new Queue('enrich-settlement', { connection });
export const aggregatesQueue = new Queue('rollup-aggregates', { connection });

export { connection };
