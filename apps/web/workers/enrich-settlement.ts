import { Worker } from 'bullmq';
import { prisma } from '@x402/db';
import { connection, waitForReady } from '@/lib/queue';

export let settlementWorker: Worker | undefined;

(async () => {
    try {
        await waitForReady(2000);
    } catch (e) {
        console.warn('Skipping worker start: Redis not ready');
        return;
    }

    try {
        settlementWorker = new Worker('enrich-settlement', async (job) => {
            console.log(`Processing enrichment for event ${job.data.eventId}`);

            if (!connection.status || connection.status !== 'ready') {
                console.log("Skipping worker logic: Redis not ready");
                return;
            }

            // Simulate blockchain lookup delay
            await new Promise(r => setTimeout(r, 500));

            try {
                await prisma.x402Event.update({
                    where: { id: job.data.eventId },
                    data: {
                        txHash: `0x${Math.random().toString(16).substring(2)}`,
                        blockNumberOrSlot: BigInt(Date.now()),
                        // @ts-ignore
                        eventType: "SETTLED"
                    }
                });
                console.log(`Enriched event ${job.data.eventId}`);
            } catch (e) {
                console.error("Enrichment failed", e);
                throw e;
            }

        }, { connection, concurrency: 5 });

        console.log('Started settlement worker');
    } catch (err) {
        console.warn('Failed to start settlement worker', err);
    }
})();
