"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function ExportsPage() {
    const exports = [
        { name: 'Transaction History', format: 'CSV', period: 'All time', size: '15.4 MB' },
        { name: 'Analytics Summary', format: 'JSON', period: 'Last 30 days', size: '1.2 MB' },
        { name: 'Cohort Analysis', format: 'CSV', period: 'Last 90 days', size: '3.8 MB' },
        { name: 'Facilitator Report', format: 'PDF', period: 'Monthly', size: '2.1 MB' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    DATA EXPORTS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>Download reports and export your data</p>
            </div>

            {/* Download Reports */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid #222',
                marginBottom: '24px'
            }}>
                <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                    color: lime
                }}>
                    DOWNLOAD REPORTS
                </div>
                <p style={{ color: '#666', fontSize: '13px', marginBottom: '24px' }}>
                    Export your transaction history and analytics data.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px'
                }}>
                    {exports.map((item, i) => (
                        <div key={i} style={{
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            padding: '24px',
                            border: '1px solid #333',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s'
                        }}>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>
                                    {item.name}
                                </div>
                                <div style={{ fontSize: '12px', color: '#666' }}>
                                    {item.period} • {item.size}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{
                                    padding: '4px 8px',
                                    background: '#222',
                                    borderRadius: '4px',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    color: '#888'
                                }}>
                                    {item.format}
                                </span>
                                <button style={{
                                    width: '36px',
                                    height: '36px',
                                    background: lime,
                                    color: '#0A0A0A',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    ↓
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Access */}
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
                    marginBottom: '24px',
                    textTransform: 'uppercase'
                }}>
                    API ACCESS
                </div>
                <p style={{ color: '#666', fontSize: '13px', marginBottom: '24px' }}>
                    Programmatic access tokens for external BI tools.
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px'
                }}>
                    <div style={{
                        flex: 1,
                        padding: '14px 18px',
                        background: '#1a1a1a',
                        borderRadius: '8px',
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        color: '#888'
                    }}>
                        x402_live_8923...h1294kj2h
                    </div>
                    <button style={{
                        padding: '14px 24px',
                        background: '#222',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        COPY
                    </button>
                </div>

                <button style={{
                    padding: '14px 24px',
                    background: lime,
                    color: '#0A0A0A',
                    border: 'none',
                    borderRadius: '0',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    GENERATE NEW TOKEN
                </button>
            </div>
        </div>
    );
}
