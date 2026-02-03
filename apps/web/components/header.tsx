"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { User } from "next-auth";

export function Header({ user }: { user: User }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!ref.current) return;
            if (e.target instanceof Node && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, []);

    return (
        <header className="relative h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-background">
            <Link
                href="/"
                aria-label="Home"
                title="Home"
                className="flex items-center justify-center w-10 h-10 rounded-md bg-[rgba(205,255,0,0.15)] hover:bg-[rgba(205,255,0,0.22)] focus:outline-none"
                style={{
                    color: '#CDFF00',
                    boxShadow: 'none',
                    border: '1px solid rgba(205,255,0,0.08)'
                }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 10.5L12 4L21 10.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" fill="currentColor" />
                </svg>
            </Link>

            <div ref={ref} className="flex items-center gap-4">
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    className="flex items-center gap-3 focus:outline-none"
                >
                    <div className="text-sm font-medium text-muted-foreground">{user?.name ?? user?.email}</div>
                    <img src="/demo-avatar.png" alt="user avatar" style={{ width: 32, height: 32, borderRadius: 9999, objectFit: 'cover' }} />
                </button>

                <div
                    aria-hidden={!open}
                    style={{
                        position: 'absolute',
                        right: 24,
                        top: '100%',
                        marginTop: 8,
                        width: 224,
                        background: '#1a1a1a',
                        border: '1px solid #222',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                        zIndex: 50,
                        transform: open ? 'translateY(0)' : 'translateY(-6px)',
                        opacity: open ? 1 : 0,
                        pointerEvents: open ? 'auto' : 'none',
                        transition: 'opacity 150ms ease, transform 150ms ease'
                    }}
                >
                    <div style={{ padding: 12 }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                            <img src="/demo-avatar.png" alt="user avatar" style={{ width: 40, height: 40, borderRadius: 9999, objectFit: 'cover' }} />
                            <div>
                                <div style={{ fontWeight: 700 }}>{user?.name ?? 'Demo'}</div>
                                <div style={{ fontSize: 12, color: '#9ca3af' }}>{user?.email}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #222' }}>
                        <a href="/dashboard/settings" className="block px-4 py-2 text-sm hover:bg-[#111]">Profile & settings</a>
                        <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-left block px-4 py-2 text-sm hover:bg-[#111]">Sign out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
