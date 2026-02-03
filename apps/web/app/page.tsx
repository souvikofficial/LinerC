"use client";

import { useCallback } from 'react';
import Link from 'next/link';

export default function Home() {
    const lime = '#CDFF00';
    const dark = '#0A0A0A';
    const darkGray = '#1A1A1A';

    const handleNavClick = useCallback((e: React.MouseEvent, id?: string, href?: string) => {
        if (id) {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else if (href) window.location.href = href;
        }
    }, []);

    return (
        <main className="min-h-screen text-white" style={{ backgroundColor: dark, fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Nav */}
            <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[22px] font-extrabold" style={{ color: lime }}>⚡</span>
                        <span className="text-xl font-extrabold tracking-tight">LinerC</span>
                    </div>
                    <nav className="flex gap-10 items-center" aria-label="Primary">
                        <Link href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-gray-400 text-sm font-medium">Features</Link>
                        <Link href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-gray-400 text-sm font-medium">How it works</Link>
                        <Link href="/dashboard/integration" className="text-gray-400 text-sm font-medium underline">Dashboard</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-20 px-6 bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(180deg, ${dark} 0%, ${darkGray} 100%)` }}>
                {/* Decorative lime gradient */}
                <div className="pointer-events-none absolute top-[10%] -right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${lime}20 0%, transparent 70%)`, filter: 'blur(80px)' }} />

                <img src="/demo-avatar.png" alt="LinerC logo" className="w-28 h-28 md:w-36 md:h-36 rounded-md mb-6" />

                <h1 className="font-extrabold leading-[0.95] tracking-tight uppercase mb-6" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
                    PAYMENTS<br />
                    <span style={{ color: lime }}>ONCHAIN</span>
                </h1>

                <p className="text-base text-gray-400 max-w-2xl mb-6 leading-relaxed">
                    LinerC is a stablecoin-native payment platform with seamless x402 integration and powerful analytics.
                </p>

                <div className="flex gap-3 justify-center mb-7 flex-wrap text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color: lime }} aria-hidden>
                            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                        </svg>
                        <span className="font-semibold text-gray-200">Instant settlement</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-gray-200" fill="currentColor" aria-hidden>
                            <path d="M12 17a1 1 0 100-2 1 1 0 000 2z" />
                            <path d="M17 8V7a5 5 0 00-10 0v1H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2h-2zm-7-1a3 3 0 116 0v1H10V7z" />
                        </svg>
                        <span className="font-semibold text-gray-200">Built-in routing</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-gray-200" fill="currentColor" aria-hidden>
                            <path d="M3 3v18h4V7H3zm7 7v11h4V10h-4zm7-4v15h4V6h-4z" />
                        </svg>
                        <span className="font-semibold text-gray-200">Real-time analytics</span>
                    </div>
                </div>

                <div className="flex gap-4 flex-wrap justify-center">
                    <Link href="/dashboard/integration" aria-label="Get started with LinerC" className="inline-flex items-center gap-2 px-9 py-4 bg-[--lime] text-black font-extrabold uppercase text-sm rounded-sm" style={{ background: lime }}>
                        GET STARTED ↓
                    </Link>
                    <Link href="#features" onClick={(e) => handleNavClick(e, 'features')} aria-label="Learn more about features" className="inline-flex items-center gap-2 px-9 py-4 bg-[#161616] text-white font-extrabold uppercase text-sm rounded-sm">
                        LEARN MORE →
                    </Link>
                </div>
            </section>

            {/* Features Section - White Background */}
            <section id="features" style={{
                background: '#F5F5F5',
                color: dark,
                padding: '120px 48px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{
                                fontSize: '42px',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em'
                            }}>
                                The Endgame<br />For x402
                            </h2>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: 1.7,
                                color: '#444'
                            }}>
                                LinerC is a <em style={{ fontStyle: 'italic', fontWeight: 600 }}>vertically integrated onchain payment platform</em> built
                                with stablecoins, cross-chain routing, and instant settlement. <Link href="/dashboard/integration" style={{ color: dark, fontWeight: 600 }}>Learn more.</Link>
                            </p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px',
                        marginTop: '80px'
                    }}>
                        <FeatureCard
                            accentColor={lime}
                            title="$1034.23"
                            subtitle="7,534.77 remaining"
                            action="SEND →"
                        />
                        <FeatureCard
                            accentColor="#5B5BFF"
                            title="$1034.23"
                            subtitle="Value"
                            action="USD"
                            dark
                        />
                        <FeatureCard
                            accentColor={lime}
                            title="⚡ LinerC"
                            subtitle="Instant transfers"
                            action=""
                        />
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section style={{
                background: '#fff',
                padding: '80px 48px',
                textAlign: 'center'
            }}>
                <h3 style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: dark,
                    marginBottom: '48px',
                    textTransform: 'uppercase'
                }}>
                    WORKING WITH THE BEST
                </h3>
                <div style={{
                    display: 'flex',
                    gap: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    opacity: 0.6
                }}>
                    {['CIRCLE', 'POLYGON', 'BASE', 'COINBASE', 'ARBITRUM'].map((partner) => (
                        <span key={partner} style={{ fontSize: '16px', fontWeight: 700, color: dark }}>{partner}</span>
                    ))}
                </div>
            </section>

            {/* CTA Section - Dark */}
            <section style={{
                background: dark,
                padding: '160px 48px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '400px',
                    background: `radial-gradient(ellipse, ${lime}15 0%, transparent 60%)`,
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }} />

                <h2 style={{
                    fontSize: 'clamp(48px, 8vw, 100px)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <span style={{ color: lime }}>BE YOUR</span><br />
                    OWN BANK
                </h2>

                <p style={{
                    fontSize: '18px',
                    color: lime,
                    marginTop: '48px',
                    position: 'relative',
                    zIndex: 1
                }}>
                    Join our team — <Link href="#" style={{ color: lime, textDecoration: 'underline' }}>marketing</Link> — <Link href="#" style={{ color: lime, textDecoration: 'underline' }}>engineering</Link>
                </p>
            </section>

            {/* Footer */}
            <footer style={{
                background: dark,
                borderTop: `1px solid ${darkGray}`,
                padding: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: lime, fontSize: '18px', fontWeight: 900 }}>⚡</span>
                    <span style={{ fontSize: '16px', fontWeight: 900 }}>LinerC</span>
                </div>
                <div style={{ display: 'flex', gap: '32px' }}>
                    {['By LinerC Labs', '@linerc_x', 'hello@linerc.com', 'Terms', 'Privacy'].map((item) => (
                        <Link key={item} href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>{item}</Link>
                    ))}
                </div>
            </footer>

            <div style={{
                background: dark,
                padding: '24px 48px',
                borderTop: `1px solid ${darkGray}`,
                fontSize: '11px',
                color: '#444'
            }}>
                LinerC is a financial technology company, not a regulated bank. LinerC does not custody any user funds. No fractional reserve. No FDIC insurance.
            </div>
        </main>
    );
}

function FeatureCard({ accentColor, title, subtitle, action, dark = false }: {
    accentColor: string,
    title: string,
    subtitle: string,
    action: string,
    dark?: boolean
}) {
    return (
        <div style={{
            background: dark ? '#1A1A1A' : '#fff',
            borderRadius: '12px',
            padding: '32px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                background: accentColor
            }} />
            <p style={{ fontSize: '12px', color: dark ? '#888' : '#666', marginBottom: '8px' }}>{subtitle}</p>
            <h3 style={{
                fontSize: '32px',
                fontWeight: 900,
                color: dark ? '#fff' : '#0A0A0A',
                marginBottom: '24px'
            }}>{title}</h3>
            {action && (
                <button style={{
                    padding: '12px 24px',
                    background: dark ? accentColor : '#f0f0f0',
                    color: dark ? '#0A0A0A' : '#0A0A0A',
                    border: 'none',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                }}>
                    {action}
                </button>
            )}
        </div>
    );
}
