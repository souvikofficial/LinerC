import * as React from "react"
import { Badge } from "./ui/badge"
import { cn } from "../lib/utils"
import { type ChainId } from "@x402/types"

interface ChainBadgeProps {
    chainId: ChainId | string
    className?: string
}

const CHAIN_CONFIG: Record<string, { label: string; className: string }> = {
    'eip155:8453': { label: 'Base', className: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' },
    'solana:mainnet': { label: 'Solana', className: 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600' },
    'base': { label: 'Base', className: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' },
    'solana': { label: 'Solana', className: 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600' },
}

export function ChainBadge({ chainId, className }: ChainBadgeProps) {
    const config = CHAIN_CONFIG[chainId] || { label: chainId, className: 'bg-gray-600' }

    return (
        <Badge className={cn(config.className, className)} variant="default">
            {config.label}
        </Badge>
    )
}
