import { Badge, ChainBadge } from "@x402/ui"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

export default async function ReplayIndexPage() {
    // Mock data re-use
    const events = Array.from({ length: 5 }).map((_, i) => ({
        id: `evt_${Date.now()}_${i}`,
        status: i % 3 === 0 ? "failed" : "settled",
        amount: "1.50",
        currency: "USDC",
        chainId: "eip155:8453",
        txHash: "0x38...129s",
        createdAt: new Date(),
    }));

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Transaction Replay</h2>
            <p className="text-muted-foreground">Select a transaction to inspect its full lifecycle and debug issues.</p>

            <div className="rounded-md border bg-card">
                <table className="w-full caption-bottom text-sm text-left">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Network</th>
                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Tx Hash</th>
                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {events.map((event) => (
                            <tr key={event.id} className="border-b hover:bg-muted/50">
                                <td className="p-4 align-middle"><ChainBadge chainId={event.chainId} /></td>
                                <td className="p-4 align-middle font-mono">{event.txHash}</td>
                                <td className="p-4 align-middle">
                                    <Badge variant={event.status === 'failed' ? 'destructive' : 'default'}>{event.status}</Badge>
                                </td>
                                <td className="p-4 align-middle text-right">
                                    <Link href={`/dashboard/replay/${event.id}`} className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400">
                                        <PlayCircle className="w-4 h-4" /> Replay
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
