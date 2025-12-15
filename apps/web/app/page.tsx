"use client";

import Link from 'next/link';

export default function Home() {
    const lime = '#CDFF00';
    const dark = '#0A0A0A';
    const darkGray = '#1A1A1A';

    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: dark,
            color: '#ffffff',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            {/* Nav */}
            <header style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 48px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(10,10,10,0.8)',
                backdropFilter: 'blur(12px)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: lime, fontSize: '24px', fontWeight: 900 }}>⚡</span>
                    <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.02em' }}>LinerC</span>
                </div>
                <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <Link href="#features" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Features</Link>
                    <Link href="#how-it-works" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>How it works</Link>
                    <Link href="/dashboard/integration" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: 500, textDecoration: 'underline' }}>Dashboard</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '120px 24px 80px',
                background: `linear-gradient(180deg, ${dark} 0%, ${darkGray} 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative lime gradient */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-20%',
                    width: '600px',
                    height: '600px',
                    background: `radial-gradient(circle, ${lime}20 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
                }} />

                <h1 style={{
                    fontSize: 'clamp(48px, 10vw, 120px)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    marginBottom: '24px',
                    textTransform: 'uppercase'
                }}>
                    PAYMENTS<br />
                    <span style={{ color: lime }}>ONCHAIN</span>
                </h1>

                <p style={{
                    fontSize: '18px',
                    color: '#888',
                    maxWidth: '500px',
                    marginBottom: '48px',
                    lineHeight: 1.6
                }}>
                    LinerC is a stablecoin-native payment platform with
                    seamless x402 integration and powerful analytics.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link href="/dashboard/integration" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '20px 40px',
                        background: lime,
                        color: dark,
                        borderRadius: '0',
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'transform 0.2s'
                    }}>
                        GET STARTED ↓
                    </Link>
                    <Link href="#features" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '20px 40px',
                        background: darkGray,
                        color: '#fff',
                        borderRadius: '0',
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
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
