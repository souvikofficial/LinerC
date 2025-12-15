import { prisma } from "@x402/db"
import { Badge, ChainBadge } from "@x402/ui"
import Link from "next/link"
import { PlayCircle, CheckCircle2, AlertCircle, Clock, ArrowRight } from "lucide-react"

async function getEvent(id: string) {
    // Mock Data
    return {
        id,
        requestId: "req_demo_123",
        status: "failed", // Example error state
        timeline: [
            { stage: "402_issued", time: "2024-01-20T10:00:00Z", status: "success" },
            { stage: "payment_initiated", time: "2024-01-20T10:00:05Z", status: "success" },
            { stage: "settled", time: "2024-01-20T10:00:15Z", status: "failed", error: "Insufficient Funds" },
            { stage: "delivered", time: null, status: "pending" }
        ],
        payload: {
            amount: "10.00", currency: "USDC", payer: "0x123...abc", chain: "BASE"
        }
    }
}

export default async function ReplayDetailPage({ params }: { params: { eventId: string } }) {
    const event = await getEvent(params.eventId);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">Transaction Replay</h2>
                    <p className="text-muted-foreground text-sm font-mono">{event.requestId}</p>
                </div>
                <Badge variant={event.status === 'settled' ? 'default' : 'destructive'}>
                    {event.status.toUpperCase()}
                </Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Timeline Panel */}
                <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold mb-4">Lifecycle Timeline</h3>
                    <div className="relative border-l border-muted ml-3 space-y-8">
                        {event.timeline.map((item, i) => (
                            <div key={i} className="ml-6 relative">
                                <span className={`absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background ${item.status === 'success' ? 'bg-green-500' :
                                        item.status === 'failed' ? 'bg-red-500' : 'bg-muted'
                                    }`}>
                                    {item.status === 'success' && <CheckCircle2 className="h-3 w-3 text-white" />}
                                    {item.status === 'failed' && <AlertCircle className="h-3 w-3 text-white" />}
                                </span>
                                <div>
                                    <p className="font-medium leading-none">{item.stage}</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {item.time ? new Date(item.time).toLocaleTimeString() : '--:--'}
                                    </p>
                                    {item.error && (
                                        <div className="mt-2 text-sm text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20">
                                            Error: {item.error}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payload Panel */}
                <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold mb-4">Event Payload</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs font-mono">
                        {JSON.stringify(event.payload, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}
