"use client"

import { useEffect, useState } from "react"
import { Badge } from "@x402/ui"
import { formatDistanceToNow } from "date-fns"

interface Event {
    id: string
    status: string
    amount: string
    currency: string
    txHash: string
    createdAt: string
    payerAddress: string
}

export function RecentEvents() {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch('/api/events')
                if (res.ok) {
                    const data = await res.json()
                    setEvents(data)
                }
            } catch (e) {
                console.error("Polling error", e)
            }
        }

        fetchEvents()
        const interval = setInterval(fetchEvents, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="space-y-4">
            {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b border-border pb-2 last:border-0">
                    <div className="flex flex-col">
                        <span className="font-medium truncate w-32">{event.payerAddress}</span>
                        <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">+{event.amount} {event.currency}</span>
                        <Badge variant={event.status === 'settled' ? 'default' : 'secondary'} className="text-[10px] h-5">
                            {event.status}
                        </Badge>
                    </div>
                </div>
            ))}
            {events.length === 0 && <div className="text-sm text-muted-foreground p-4 text-center">Loading live feed...</div>}
        </div>
    )
}
