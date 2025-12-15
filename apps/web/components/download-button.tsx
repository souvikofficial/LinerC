"use client"

import { Button } from "@x402/ui"
import { Download } from "lucide-react"

interface DownloadButtonProps {
    data: any[]
    filename?: string
    label?: string
}

export function DownloadButton({ data, filename = "export.csv", label = "Export CSV" }: DownloadButtonProps) {
    const handleDownload = () => {
        if (!data || !data.length) return

        // Get headers
        const headers = Object.keys(data[0])

        // Create CSV content
        const csvContent = [
            headers.join(","),
            ...data.map(row => headers.map(header => {
                const cell = row[header]
                // Escape quotes and wrap in quotes if contains comma
                return typeof cell === 'string' && cell.includes(',')
                    ? `"${cell}"`
                    : cell
            }).join(","))
        ].join("\n")

        // Trigger download
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.setAttribute("href", url)
        link.setAttribute("download", filename)
        link.style.visibility = "hidden"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            {label}
        </Button>
    )
}
