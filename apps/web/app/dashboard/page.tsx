"use client";

const lime = '#CDFF00';
const dark = '#0A0A0A';
const darkGray = '#141414';

export default function DashboardPage() {
    const stats = [
        { label: 'TOTAL VOLUME', value: '$84,320.50', change: '+20.1%', positive: true },
        { label: 'NET REVENUE', value: '$8,120.00', change: '+15.0%', positive: true },
        { label: 'ACTIVE PAYERS', value: '843', change: '+180', positive: true },
        { label: 'ARPA', value: '$12.45', change: '0%', positive: true },
    ];

    const recentEvents = [
        { id: 'evt_001', type: 'PAYMENT', amount: '$25.00', chain: 'BASE', status: 'SETTLED', time: '2m ago' },
        { id: 'evt_002', type: 'PAYMENT', amount: '$150.00', chain: 'ETH', status: 'PENDING', time: '5m ago' },
        { id: 'evt_003', type: 'REFUND', amount: '$12.50', chain: 'BASE', status: 'SETTLED', time: '12m ago' },
        { id: 'evt_004', type: 'PAYMENT', amount: '$89.00', chain: 'ARB', status: 'SETTLED', time: '18m ago' },
        { id: 'evt_005', type: 'PAYMENT', amount: '$320.00', chain: 'BASE', status: 'SETTLED', time: '25m ago' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            {/* Page Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    marginBottom: '8px'
                }}>
                    OVERVIEW
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>
                    Real-time analytics for your x402 payments
                </p>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                marginBottom: '32px'
            }}>
                {stats.map((stat, i) => (
                    <div key={i} style={{
                        background: darkGray,
                        borderRadius: '12px',
                        padding: '24px',
                        border: `1px solid #222`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: i === 0 ? lime : '#333'
                        }} />
                        <div style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            color: '#666',
                            marginBottom: '12px'
                        }}>
                            {stat.label}
                        </div>
                        <div style={{
                            fontSize: '28px',
                            fontWeight: 900,
                            letterSpacing: '-0.02em',
                            marginBottom: '8px'
                        }}>
                            {stat.value}
                        </div>
                        <div style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: stat.positive ? lime : '#ff4444'
                        }}>
                            {stat.change} from last month
                        </div>
                    </div>
                ))}
            </div>

            {/* Two Column Layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
            }}>
                {/* Preferred Chain */}
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: `1px solid #222`
                }}>
                    <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#666',
                        marginBottom: '16px'
                    }}>
                        PREFERRED CHAIN NOW
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            fontSize: '48px',
                            fontWeight: 900,
                            color: lime
                        }}>
                            BASE
                        </div>
                        <div style={{
                            padding: '6px 12px',
                            background: 'rgba(205,255,0,0.1)',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: lime
                        }}>
                            LOWEST FEES
                        </div>
                    </div>
                    <p style={{ color: '#666', fontSize: '13px', marginTop: '16px' }}>
                        Based on current fees & congestion
                    </p>
                </div>

                {/* Recent Events */}
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: `1px solid #222`
                }}>
                    <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#666',
                        marginBottom: '16px'
                    }}>
                        RECENT EVENTS
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {recentEvents.slice(0, 4).map((event) => (
                            <div key={event.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '12px',
                                background: '#1a1a1a',
                                borderRadius: '8px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: event.status === 'SETTLED' ? lime : '#ffaa00'
                                    }} />
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>{event.amount}</span>
                                    <span style={{
                                        padding: '2px 6px',
                                        background: '#222',
                                        borderRadius: '4px',
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        color: '#888'
                                    }}>
                                        {event.chain}
                                    </span>
                                </div>
                                <span style={{ fontSize: '12px', color: '#666' }}>{event.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Volume Chart Placeholder */}
            <div style={{
                marginTop: '24px',
                background: darkGray,
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid #222`
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px'
                }}>
                    <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#666'
                    }}>
                        VOLUME TREND (7D)
                    </div>
                    <button style={{
                        padding: '8px 16px',
                        background: lime,
                        color: dark,
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '11px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        DOWNLOAD CSV
                    </button>
                </div>
                <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '8px',
                    paddingTop: '20px'
                }}>
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} style={{
                            flex: 1,
                            height: `${h}%`,
                            background: `linear-gradient(180deg, ${lime} 0%, ${lime}40 100%)`,
                            borderRadius: '4px 4px 0 0',
                            opacity: i === 5 ? 1 : 0.6
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
