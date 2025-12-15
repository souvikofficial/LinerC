// X402 Core Types

export type ChainId = "eip155:8453" | "solana:mainnet";

// V2 Enums
export type Chain = "base" | "solana";

export type X402EventType =
    | "402_issued"
    | "payment_initiated"
    | "verified"
    | "settled"
    | "delivered"
    | "failed";

export interface Merchant {
    id: string;
    name: string;
    slug: string;
    planTier: string;
}

export interface IngestX402EventRequest {
    requestId: string;
    merchantId?: string; // Derived from API Key usually, but allowing for debug
    endpointId?: string;
    facilitatorId?: string;
    payerHash?: string; // For PayerIdentity
    chain: Chain;
    eventType: X402EventType;
    amount?: string;
    currency?: string;
    feeEstimate?: string;
    txHash?: string;
    blockNumberOrSlot?: string;
    country?: string;
    userAgent?: string;
}

export interface ChainSnapshotRequest {
    chain: Chain;
    gasOrFeePerUnit: string;
    avgConfirmationMs: number;
    congestionIndex: number;
    capturedAt?: string; // ISO
}
