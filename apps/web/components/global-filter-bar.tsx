"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useEffect, useState, useTransition } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@x402/ui"
import { Input, Button } from "@x402/ui"
import { CalendarIcon, Search, X } from "lucide-react"

export function GlobalFilterBar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [isPending, startTransition] = useTransition()

    // Local state for debouncing text inputs
    const [merchantQuery, setMerchantQuery] = useState(searchParams.get("merchant") || "")

    // Sync state with URL params on load/change
    useEffect(() => {
        setMerchantQuery(searchParams.get("merchant") || "")
    }, [searchParams])

    const createQueryString = useCallback(
        (name: string, value: string | null) => {
            const params = new URLSearchParams(searchParams.toString())
            if (value && value !== "all") {
                params.set(name, value)
            } else {
                params.delete(name)
            }
            return params.toString()
        },
        [searchParams]
    )

    const handleFilterChange = (name: string, value: string) => {
        startTransition(() => {
            router.push(`${pathname}?${createQueryString(name, value)}`)
        })
    }

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            if (merchantQuery !== (searchParams.get("merchant") || "")) {
                handleFilterChange("merchant", merchantQuery)
            }
        }, 500)
        return () => clearTimeout(timer)
    }, [merchantQuery])

    const clearFilters = () => {
        router.push(pathname)
    }

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg bg-card/50 md:flex-row md:items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Search className="w-4 h-4" />
                Filters
            </div>

            {/* Time Range */}
            <Select
                defaultValue={searchParams.get("range") || "30d"}
                onValueChange={(val: string) => handleFilterChange("range", val)}
            >
                <SelectTrigger className="w-[140px]">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="24h">Last 24 Hours</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="90d">Last 90 Days</SelectItem>
                </SelectContent>
            </Select>

            {/* Chain Selector */}
            <Select
                defaultValue={searchParams.get("chain") || "all"}
                onValueChange={(val: string) => handleFilterChange("chain", val)}
            >
                <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Chains" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Chains</SelectItem>
                    <SelectItem value="base">Base</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                </SelectContent>
            </Select>

            {/* Text Filters */}
            <Input
                placeholder="Filter by Merchant..."
                className="max-w-[200px]"
                value={merchantQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMerchantQuery(e.target.value)}
            />

            {/* Clear Button */}
            {(searchParams.toString().length > 0 && searchParams.get("range") !== "30d") && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto text-muted-foreground">
                    <X className="w-4 h-4 mr-2" />
                    Reset
                </Button>
            )}
        </div>
    )
}
