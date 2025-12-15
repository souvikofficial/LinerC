"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const lime = '#CDFF00';
const dark = '#0A0A0A';
const darkGray = '#141414';

const routes = [
    { label: "INTEGRATION", href: "/dashboard/integration" },
    { label: "OVERVIEW", href: "/dashboard" },
    { label: "PAYMENTS", href: "/dashboard/events" },
    { label: "FUNNELS", href: "/dashboard/funnels" },
    { label: "COHORTS", href: "/dashboard/cohorts" },
    { label: "CHAINS", href: "/dashboard/chains" },
    { label: "FACILITATORS", href: "/dashboard/facilitators" },
    { label: "EXPORTS", href: "/dashboard/exports" },
    { label: "SETTINGS", href: "/dashboard/settings" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div style={{
            width: '200px',
            height: '100vh',
            background: dark,
            borderRight: `1px solid ${darkGray}`,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 0'
        }}>
            {/* Logo */}
            <Link href="/dashboard" style={{
                padding: '0 24px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
            }}>
                <span style={{
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: 900,
                    letterSpacing: '-0.02em'
                }}>
                    Liner<span style={{ color: lime }}>C</span>
                </span>
            </Link>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '0 12px' }}>
                {routes.map((route) => {
                    const isActive = pathname === route.href ||
                        (route.href !== '/dashboard' && pathname?.startsWith(route.href));

                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            style={{
                                display: 'block',
                                padding: '12px 16px',
                                marginBottom: '2px',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                background: isActive ? darkGray : 'transparent',
                                color: isActive ? lime : '#666',
                                transition: 'all 0.2s',
                                borderLeft: isActive ? `3px solid ${lime}` : '3px solid transparent'
                            }}
                        >
                            {route.label}
                        </Link>
                    );
                })}
            </nav>

            {/* User */}
            <div style={{
                padding: '16px 24px',
                borderTop: `1px solid ${darkGray}`,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: lime,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 900,
                    color: dark
                }}>
                    D
                </div>
                <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Demo</div>
                    <div style={{ fontSize: '10px', color: '#666' }}>demo@linerc.com</div>
                </div>
            </div>
        </div>
    )
}
