import * as React from "react"
import { Card } from "./ui/card"
import { cn } from "../lib/utils"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
    title: string
    value: string
    icon: LucideIcon
    className?: string
    trend?: {
        value: number
        label: string
    }
}

export function StatsCard({ title, value, icon: Icon, className, trend }: StatsCardProps) {
    return (
        <Card className={cn("p-6", className)}>
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">{title}</p>
                        <h3 className="text-2xl font-bold">{value}</h3>
                    </div>
                </div>
                {trend && (
                    <div className={cn("flex flex-col items-end text-sm", trend.value >= 0 ? "text-green-500" : "text-red-500")}>
                        <span className="font-medium">{trend.value > 0 ? "+" : ""}{trend.value}%</span>
                        <span className="text-xs text-muted-foreground">{trend.label}</span>
                    </div>
                )}
            </div>
        </Card>
    )
}
