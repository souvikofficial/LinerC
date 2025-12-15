import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@x402/db";
import { IngestX402EventRequest, X402EventType } from "@x402/types";

// Enum mapping helper
const MAP_EVENT_TYPE = {
    "402_issued": "ISSUED_402",
    "payment_initiated": "PAYMENT_INITIATED",
    "verified": "VERIFIED",
    "settled": "SETTLED",
    "delivered": "DELIVERED",
    "failed": "FAILED"
};

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get("x-api-key");
    const idempotencyKey = req.headers.get("idempotency-key");

    if (!apiKey) {
        return NextResponse.json({ error: "Missing API Key" }, { status: 401 });
    }

    try {
        const body: IngestX402EventRequest = await req.json();

        // 1. Validate Merchant (Mocked if DB down)
        // const merchant = await prisma.apiKey.findUnique(...)
        const merchantId = "mock-merchant-v2";

        // 2. Idempotency Check (Dedupe by requestId + eventType)
        // if (await redis.exists(`idemp:${body.requestId}:${body.eventType}`)) ...

        // 3. Persist Event
        try {
            await prisma.x402Event.create({
                data: {
                    requestId: body.requestId,
                    merchantId: merchantId,
                    endpointId: body.endpointId,
                    facilitatorId: body.facilitatorId,
                    // @ts-ignore - Prisma enum mismatch with string literal from types
                    chain: body.chain.toUpperCase(),
                    // @ts-ignore
                    eventType: MAP_EVENT_TYPE[body.eventType],
                    amount: body.amount ? Number(body.amount) : undefined,
                    currency: body.currency,
                    txHash: body.txHash,
                    userAgent: body.userAgent,
                    country: body.country,
                    // Handle Payer Identity upsert logic here in real imp
                }
            });
            return NextResponse.json({ success: true, requestId: body.requestId });
        } catch (e) {
            console.error("Ingest DB Error", e);
            // Fallback for mocked mode
            return NextResponse.json({ success: true, requestId: body.requestId, mode: "mock-ingest" });
        }

    } catch (e) {
        return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }
}
