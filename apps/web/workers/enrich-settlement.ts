import { Worker } from 'bullmq';
import { prisma } from '@x402/db';
import { connection } from '@/lib/queue';

export const settlementWorker = new Worker('enrich-settlement', async (job) => {
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
                eventType: "SETTLED" // Ensure status is settled
            }
        });
        console.log(`Enriched event ${job.data.eventId}`);
    } catch (e) {
        console.error("Enrichment failed", e);
        throw e;
    }

}, { connection, concurrency: 5 });
