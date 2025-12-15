import { PrismaClient, Chain, X402EventType } from "@prisma/client";
import { addDays, subDays } from "date-fns";
import * as dotenv from "dotenv";
import path from "path";

// Load .env from root with override
dotenv.config({ path: path.resolve(__dirname, "../../.env"), override: true });

const prisma = new PrismaClient();

const MERCHANTS = [
    { name: "Pioneer Labs", slug: "pioneer-labs", planTier: "enterprise" },
    { name: "Orbital Defi", slug: "orbital-defi", planTier: "pro" },
    { name: "Agent Smith", slug: "agent-smith", planTier: "free" },
];

const FACILITATORS = [
    { name: "Coinbase Developer Platform", apiBase: "https://api.coinbase.com", reliabilityScore: 99.9 },
    { name: "Crossmint", apiBase: "https://crossmint.com/api", reliabilityScore: 99.5 },
];

const ENDPOINTS = [
    { name: "Premium Content", path: "/api/premium", price: 1.5 },
    { name: "AI Generation", path: "/api/generate", price: 0.5 },
    { name: "Data Feed", path: "/api/feed", price: 0.1 },
    { name: "Storage", path: "/api/store", price: 5.0 },
];

async function main() {
    console.log("Seeding V2 Data...");

    // 0. Clean Database
    console.log("Cleaning database...");
    await prisma.funnelAgg.deleteMany();
    await prisma.cohortAgg.deleteMany();
    await prisma.revenueAgg.deleteMany();
    await prisma.facilitatorAgg.deleteMany();
    await prisma.x402Event.deleteMany();
    await prisma.endpoint.deleteMany();
    await prisma.apiKey.deleteMany();
    await prisma.payerIdentity.deleteMany();
    await prisma.merchant.deleteMany();
    await prisma.facilitator.deleteMany();
    await prisma.chainSnapshot.deleteMany();


    // 1. Create Facilitators
    const facilitators = [];
    for (const f of FACILITATORS) {
        const fac = await prisma.facilitator.create({ data: f });
        facilitators.push(fac);
    }

    // 2. Create Merchants & Endpoints
    const merchants = [];
    for (const m of MERCHANTS) {
        const merchant = await prisma.merchant.create({
            data: {
                name: m.name,
                slug: m.slug,
                planTier: m.planTier,
                apiKeys: {
                    create: { key: `pk_live_${m.slug}_${Math.random().toString(36).substring(7)}` }
                }
            }
        });

        // Create Endpoints for each merchant
        for (const e of ENDPOINTS) {
            const endpoint = await prisma.endpoint.create({
                data: {
                    merchantId: merchant.id,
                    name: e.name,
                    path: e.path,
                    price: e.price,
                    chainPreference: [Chain.BASE, Chain.SOLANA],
                }
            });
            // @ts-ignore
            merchant.endpoints = merchant.endpoints || [];
            // @ts-ignore
            merchant.endpoints.push(endpoint);
        }
        merchants.push(merchant);
    }

    // 3. Generate 30 Days of History
    const now = new Date();
    for (let i = 0; i < 30; i++) {
        const day = subDays(now, i);
        console.log(`Generating day ${i + 1}/30...`);

        for (const m of merchants) {
            // @ts-ignore
            for (const ep of m.endpoints) {
                // Daily Event Count based on tier
                const baseCount = m.planTier === 'enterprise' ? 50 : m.planTier === 'pro' ? 20 : 5;
                const dailyCount = Math.floor(baseCount * (Math.random() * 0.5 + 0.8)); // Random variance

                for (let j = 0; j < dailyCount; j++) {
                    const chain = Math.random() > 0.6 ? Chain.BASE : Chain.SOLANA;
                    const facilitator = facilitators[Math.floor(Math.random() * facilitators.length)];
                    const statusRoll = Math.random();

                    let eventType: X402EventType = X402EventType.ISSUED_402;
                    let status = 'pending'; // simplified internal tracking

                    // Simulate Funnel
                    if (statusRoll > 0.1) eventType = X402EventType.PAYMENT_INITIATED;
                    if (statusRoll > 0.2) eventType = X402EventType.SETTLED; // Skip verified for speed
                    if (statusRoll > 0.25) eventType = X402EventType.DELIVERED;

                    if (statusRoll < 0.1) status = 'failed';

                    await prisma.x402Event.create({
                        data: {
                            requestId: `req_${m.slug}_${day.getTime()}_${j}`,
                            merchantId: m.id,
                            endpointId: ep.id,
                            facilitatorId: facilitator.id,
                            chain: chain,
                            eventType: eventType,
                            amount: ep.price,
                            currency: "USDC",
                            createdAt: day,
                            // Mock additional fields
                            userAgent: "Mozilla/5.0...",
                            country: "US",
                            txHash: eventType === 'SETTLED' || eventType === 'DELIVERED' ? `0x${Math.random().toString(16).substring(2)}` : undefined
                        }
                    });
                }
            }
        }
    }

    console.log("Seeding Complete.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
