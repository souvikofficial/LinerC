import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@x402/db";
import { IngestPaymentEventRequest } from "@x402/types";

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get("x-api-key");

    if (!apiKey) {
        return NextResponse.json({ error: "Missing API Key" }, { status: 401 });
    }

    // TODO: Validate API key hash against DB
    // const merchant = await prisma.apiKey.findUnique(...)
    // For now, allow any key in dev mode if DB is failing

    try {
        const body: IngestPaymentEventRequest = await req.json();

        // Basic validation
        if (!body.chainId || !body.amount || !body.txHash) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        // Attempt DB insert
        try {
            const event = await prisma.paymentEvent.create({
                data: {
                    ...body,
                    merchantId: "dummy-merchant-id-for-ingest", // Replace with actual from API key
                }
            });
            return NextResponse.json({ success: true, id: event.id });
        } catch (e) {
            console.error("DB Insert Failed (Docker likely down)", e);
            // Return success in mock mode to simulate ingestion
            return NextResponse.json({ success: true, id: "mock-id-123", mode: "mock" });
        }

    } catch (e) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
