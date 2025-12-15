import { prisma } from "@x402/db"
import { Badge } from "@x402/ui"
import Link from "next/link"

async function getMerchants() {
    try {
        const merchants = await prisma.merchant.findMany({
            include: {
                paymentEvents: {
                    select: { amount: true, status: true }
                }
            }
        });

        return merchants.map((m: any) => {
            const settled = m.paymentEvents.filter((e: any) => e.status === 'settled');
            const volume = settled.reduce((acc: number, curr: any) => acc + Number(curr.amount), 0);
            return {
                ...m,
                volume: volume.toFixed(2),
                txCount: m.paymentEvents.length,
                successRate: m.paymentEvents.length > 0
                    ? ((settled.length / m.paymentEvents.length) * 100).toFixed(1)
                    : "0.0"
            }
        });
    } catch (e) {
        // Mock
        return [
            { id: "1", name: "Pioneer Labs", volume: "12500.20", txCount: 1420, successRate: "98.2" },
            { id: "2", name: "Orbital Defi", volume: "43200.50", txCount: 5210, successRate: "99.5" },
            { id: "3", name: "Agent Smith", volume: "120.00", txCount: 45, successRate: "92.0" },
        ]
    }
}

export default async function MerchantsPage() {
    const merchants = await getMerchants();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Merchants</h2>
                <Link href="/dashboard/merchants/new" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded text-sm font-medium">
                    Add Merchant
                </Link>
            </div>

            <div className="rounded-md border bg-card">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50">
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground w-[300px]">Merchant</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Volume</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Transactions</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Success Rate</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right w-[100px]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {merchants.map((merchant: any) => (
                                <tr key={merchant.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle font-medium">{merchant.name}</td>
                                    <td className="p-4 align-middle">${merchant.volume}</td>
                                    <td className="p-4 align-middle">{merchant.txCount}</td>
                                    <td className="p-4 align-middle">
                                        <Badge variant={Number(merchant.successRate) > 95 ? "default" : "secondary"}>
                                            {merchant.successRate}%
                                        </Badge>
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <Link href={`/dashboard/merchants/${merchant.id}`} className="text-blue-500 hover:underline">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
