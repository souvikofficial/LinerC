"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { signOut } from "next-auth/react"

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
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!ref.current) return
            if (e.target instanceof Node && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', onDocClick)
        return () => document.removeEventListener('mousedown', onDocClick)
    }, [])

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

            {/* Home icon (icon-only) */}
            <div style={{ padding: '0 24px 12px' }}>
                <Link href="/" aria-label="Home" title="Home" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, background: 'transparent', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3 10.5L12 4L21 10.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" fill="currentColor" />
                    </svg>
                </Link>
            </div>

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
            <div ref={ref} style={{
                padding: '16px 24px',
                borderTop: `1px solid ${darkGray}`,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative'
            }}>
                <button onClick={() => setOpen(v => !v)} aria-expanded={open} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer'
                }}>
                    <img src="/demo-avatar.png" alt="Demo avatar" style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }} />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Demo</div>
                        <div style={{ fontSize: '10px', color: '#666' }}>demo@linerc.com</div>
                    </div>
                </button>

                <div
                    aria-hidden={!open}
                    style={{
                        position: 'absolute',
                        left: '100%',
                        top: '50%',
                        transform: open ? 'translate(12px,-50%)' : 'translate(12px,-50%) scale(0.98)',
                        width: 220,
                        background: '#1a1a1a',
                        border: '1px solid #222',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                        zIndex: 50,
                        opacity: open ? 1 : 0,
                        pointerEvents: open ? 'auto' : 'none',
                        transition: 'opacity 150ms ease, transform 150ms ease'
                    }}
                >
                    <div style={{ padding: 12 }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                            <img src="/demo-avatar.png" alt="Demo avatar" style={{ width: 40, height: 40, borderRadius: 9999, objectFit: 'cover' }} />
                            <div>
                                <div style={{ fontWeight: 700 }}>Demo</div>
                                <div style={{ fontSize: 12, color: '#9ca3af' }}>demo@linerc.com</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #222' }}>
                        <Link href="/dashboard/settings" className="block px-4 py-2 text-sm" style={{ display: 'block' }}>Profile & settings</Link>
                        <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-left block px-4 py-2 text-sm" style={{ width: '100%', background: 'transparent', border: 'none', textAlign: 'left' }}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
