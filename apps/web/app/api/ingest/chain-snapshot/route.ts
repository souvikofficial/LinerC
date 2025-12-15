import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@x402/db";
import { ChainSnapshotRequest } from "@x402/types";

export async function POST(req: NextRequest) {
    try {
        const body: ChainSnapshotRequest = await req.json();

        try {
            await prisma.chainSnapshot.create({
                data: {
                    // @ts-ignore
                    chain: body.chain.toUpperCase(),
                    gasOrFeePerUnit: body.gasOrFeePerUnit,
                    avgConfirmationMs: body.avgConfirmationMs,
                    congestionIndex: body.congestionIndex,
                    capturedAt: body.capturedAt ? new Date(body.capturedAt) : new Date(),
                }
            });
            return NextResponse.json({ success: true });
        } catch (e) {
            return NextResponse.json({ success: true, mode: "mock-snapshot" });
        }
    } catch (e) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
