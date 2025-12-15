import { StatsCard } from "@x402/ui"
import { DollarSign, CreditCard, Key } from "lucide-react"

export default function MerchantDetailPage({ params }: { params: { id: string } }) {
    // Mock data fetching based on params.id
    const merchant = {
        id: params.id,
        name: params.id === "1" ? "Pioneer Labs" : "Orbital Defi",
        volume: "12,500.20",
        txCount: 1420
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">{merchant.name}</h2>

            <div className="grid gap-4 md:grid-cols-3">
                <StatsCard title="Total Volume" value={`$${merchant.volume}`} icon={DollarSign} />
                <StatsCard title="Transactions" value={merchant.txCount.toString()} icon={CreditCard} />
                <StatsCard title="Active Keys" value="2" icon={Key} />
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                <h3 className="text-xl font-semibold mb-4">API Keys</h3>
                <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded bg-zinc-950/50">
                        <code className="text-sm font-mono text-muted-foreground">pk_live_...x892</code>
                        <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded bg-zinc-950/50">
                        <code className="text-sm font-mono text-muted-foreground">pk_test_...h12s</code>
                        <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded">Test</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
