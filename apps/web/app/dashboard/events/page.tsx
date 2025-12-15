"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function EventsPage() {
    const events = [
        { id: 'evt_8x7f2k', type: 'PAYMENT', amount: '$150.00', chain: 'BASE', facilitator: 'Coinbase', status: 'SETTLED', time: '2024-12-15 14:32' },
        { id: 'evt_9y3h5m', type: 'PAYMENT', amount: '$89.50', chain: 'ETH', facilitator: 'Uniswap', status: 'SETTLED', time: '2024-12-15 14:28' },
        { id: 'evt_2z8k4n', type: 'REFUND', amount: '$25.00', chain: 'ARB', facilitator: 'Coinbase', status: 'PENDING', time: '2024-12-15 14:15' },
        { id: 'evt_5a1b7c', type: 'PAYMENT', amount: '$320.00', chain: 'BASE', facilitator: 'LinerC', status: 'SETTLED', time: '2024-12-15 13:55' },
        { id: 'evt_3d9e2f', type: 'PAYMENT', amount: '$45.00', chain: 'POLYGON', facilitator: 'Aave', status: 'SETTLED', time: '2024-12-15 13:42' },
        { id: 'evt_7g4h8i', type: 'PAYMENT', amount: '$1,200.00', chain: 'ETH', facilitator: 'Coinbase', status: 'SETTLED', time: '2024-12-15 13:30' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                        PAYMENTS
                    </h1>
                    <p style={{ color: '#666', fontSize: '14px' }}>All x402 payment events</p>
                </div>
                <button style={{
                    padding: '12px 24px',
                    background: lime,
                    color: '#0A0A0A',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    EXPORT CSV
                </button>
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
                            {['EVENT ID', 'TYPE', 'AMOUNT', 'CHAIN', 'FACILITATOR', 'STATUS', 'TIME'].map((h) => (
                                <th key={h} style={{
                                    padding: '16px 20px',
                                    textAlign: 'left',
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
                        {events.map((event) => (
                            <tr key={event.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '13px', color: '#888' }}>{event.id}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        background: event.type === 'PAYMENT' ? 'rgba(205,255,0,0.1)' : 'rgba(255,100,100,0.1)',
                                        color: event.type === 'PAYMENT' ? lime : '#ff6464',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        borderRadius: '4px'
                                    }}>
                                        {event.type}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 20px', fontWeight: 700, fontSize: '14px' }}>{event.amount}</td>
                                <td style={{ padding: '16px 20px', fontSize: '13px', color: '#888' }}>{event.chain}</td>
                                <td style={{ padding: '16px 20px', fontSize: '13px', color: '#888' }}>{event.facilitator}</td>
                                <td style={{ padding: '16px 20px' }}>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '12px',
                                        color: event.status === 'SETTLED' ? lime : '#ffaa00'
                                    }}>
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: event.status === 'SETTLED' ? lime : '#ffaa00'
                                        }} />
                                        {event.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 20px', fontSize: '12px', color: '#666' }}>{event.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
