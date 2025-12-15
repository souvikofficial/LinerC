"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function FacilitatorsPage() {
    const facilitators = [
        { name: 'Coinbase Commerce', volume: '$42,350', fees: '$84.70', share: '50.2%', status: 'ACTIVE' },
        { name: 'LinerC Direct', volume: '$28,120', fees: '$0.00', share: '33.4%', status: 'ACTIVE' },
        { name: 'Uniswap', volume: '$8,450', fees: '$42.25', share: '10.0%', status: 'ACTIVE' },
        { name: 'Aave', volume: '$3,200', fees: '$16.00', share: '3.8%', status: 'ACTIVE' },
        { name: 'Stripe x402', volume: '$2,200', fees: '$66.00', share: '2.6%', status: 'PENDING' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    FACILITATORS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>Payment processors and their performance</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '32px'
            }}>
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #222'
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#666', marginBottom: '12px' }}>
                        TOTAL VOLUME
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900 }}>$84,320</div>
                </div>
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #222'
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#666', marginBottom: '12px' }}>
                        TOTAL FEES PAID
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: lime }}>$208.95</div>
                </div>
            </div>

            <div style={{
                background: darkGray,
                borderRadius: '12px',
                border: '1px solid #222',
                overflow: 'hidden'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#1a1a1a' }}>
                            {['FACILITATOR', 'VOLUME', 'FEES', 'SHARE', 'STATUS'].map((h) => (
                                <th key={h} style={{
                                    padding: '16px 20px',
                                    textAlign: h === 'FACILITATOR' ? 'left' : 'right',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#666',
                                    borderBottom: '1px solid #222'
                                }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {facilitators.map((f, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '14px' }}>{f.name}</td>
                                <td style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 700, fontSize: '14px' }}>{f.volume}</td>
                                <td style={{ padding: '16px 20px', textAlign: 'right', fontSize: '13px', color: f.fees === '$0.00' ? lime : '#888' }}>{f.fees}</td>
                                <td style={{ padding: '16px 20px', textAlign: 'right', fontSize: '13px', color: '#888' }}>{f.share}</td>
                                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: f.status === 'ACTIVE' ? 'rgba(205,255,0,0.1)' : 'rgba(255,170,0,0.1)',
                                        color: f.status === 'ACTIVE' ? lime : '#ffaa00',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        borderRadius: '4px'
                                    }}>
                                        {f.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
