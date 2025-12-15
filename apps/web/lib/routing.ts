import { prisma } from "@x402/db";
import { Chain } from "@prisma/client";

interface RoutingScore {
    chain: Chain;
    score: number; // 0-100, higher is better
    reason: string;
}

export async function suggestRouting(merchantId: string): Promise<RoutingScore> {
    // 1. Get latest snapshots for Base and Solana
    const [baseSnap, solSnap] = await Promise.all([
        prisma.chainSnapshot.findFirst({ where: { chain: "BASE" }, orderBy: { capturedAt: 'desc' } }),
        prisma.chainSnapshot.findFirst({ where: { chain: "SOLANA" }, orderBy: { capturedAt: 'desc' } })
    ]);

    if (!baseSnap || !solSnap) {
        return { chain: "BASE", score: 50, reason: "Insufficient Data (Default)" };
    }

    // 2. Normalize Metrics (Lower is better for Fee/Time)
    const scoreChain = (snap: typeof baseSnap) => {
        // Weights: Fee 40%, Time 30%, Reliability 30% (from congestion inverse)

        // Fee: Target $0.001 (100 pts) -> $0.10 (0 pts)
        const fees = Number(snap.gasOrFeePerUnit);
        const feeScore = Math.max(0, 100 - (fees / 0.10) * 100);

        // Time: Target 500ms (100 pts) -> 5000ms (0 pts)
        const time = snap.avgConfirmationMs;
        const timeScore = Math.max(0, 100 - (time / 5000) * 100);

        // Congestion: 0 (100 pts) -> 1 (0 pts)
        const congScore = (1 - snap.congestionIndex) * 100;

        return (feeScore * 0.4) + (timeScore * 0.3) + (congScore * 0.3);
    };

    const baseScore = scoreChain(baseSnap);
    const solScore = scoreChain(solSnap);

    if (baseScore >= solScore) {
        return { chain: "BASE", score: baseScore, reason: "Lower Fees & High Reliability" };
    } else {
        return { chain: "SOLANA", score: solScore, reason: "Fastest Confirmation" };
    }
}
