import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@x402/db";

export async function GET(req: NextRequest) {
    try {
        const events = await prisma.paymentEvent.findMany({
            take: 10,
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(events);
    } catch (e) {
        // Mock data for dev without DB
        const mockEvents = Array.from({ length: 5 }).map((_, i) => ({
            id: `evt_${Date.now()}_${i}`,
            status: "settled",
            amount: "10.00",
            currency: "USDC",
            chainId: "eip155:8453",
            txHash: "0xMockHash...",
            createdAt: new Date().toISOString(),
            payerAddress: "0x123...abc"
        }));
        return NextResponse.json(mockEvents);
    }
}
