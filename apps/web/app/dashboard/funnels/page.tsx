"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function FunnelsPage() {
    const funnels = [
        { step: 'Visit Landing Page', visitors: 10000, conversion: '100%', dropoff: '-' },
        { step: 'Click Get Started', visitors: 3500, conversion: '35%', dropoff: '65%' },
        { step: 'Connect Wallet', visitors: 2100, conversion: '60%', dropoff: '40%' },
        { step: 'Initiate Payment', visitors: 1400, conversion: '67%', dropoff: '33%' },
        { step: 'Complete Payment', visitors: 1200, conversion: '86%', dropoff: '14%' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    FUNNELS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>Track user journey through payment flows</p>
            </div>

            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid #222'
            }}>
                <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: '32px',
                    color: lime
                }}>
                    Payment Conversion Funnel
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {funnels.map((step, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px'
                        }}>
                            <div style={{
                                width: '200px',
                                fontSize: '13px',
                                fontWeight: 600,
                                color: '#fff'
                            }}>
                                {step.step}
                            </div>
                            <div style={{
                                flex: 1,
                                height: '48px',
                                background: '#1a1a1a',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: `${(step.visitors / 10000) * 100}%`,
                                    height: '100%',
                                    background: `linear-gradient(90deg, ${lime} 0%, ${lime}60 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '16px'
                                }}>
                                    <span style={{
                                        fontSize: '14px',
                                        fontWeight: 800,
                                        color: '#0A0A0A'
                                    }}>
                                        {step.visitors.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div style={{ width: '80px', textAlign: 'right' }}>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: lime }}>{step.conversion}</div>
                                <div style={{ fontSize: '11px', color: '#666' }}>{step.dropoff !== '-' ? `↓${step.dropoff}` : ''}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
