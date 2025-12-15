"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function ChainsPage() {
    const chains = [
        { name: 'Base', symbol: 'BASE', volume: '$42,350', txns: 1245, avgFee: '$0.002', status: 'OPTIMAL' },
        { name: 'Ethereum', symbol: 'ETH', volume: '$28,120', txns: 89, avgFee: '$2.45', status: 'HIGH FEES' },
        { name: 'Arbitrum', symbol: 'ARB', volume: '$8,450', txns: 312, avgFee: '$0.08', status: 'OPTIMAL' },
        { name: 'Polygon', symbol: 'MATIC', volume: '$3,200', txns: 156, avgFee: '$0.01', status: 'OPTIMAL' },
        { name: 'Optimism', symbol: 'OP', volume: '$2,200', txns: 98, avgFee: '$0.05', status: 'OPTIMAL' },
    ];

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    CHAINS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>Monitor blockchain performance and fees</p>
            </div>

            {/* Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
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
                        PREFERRED CHAIN
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: lime }}>BASE</div>
                </div>
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #222'
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#666', marginBottom: '12px' }}>
                        TOTAL CHAINS
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900 }}>5</div>
                </div>
                <div style={{
                    background: darkGray,
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #222'
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#666', marginBottom: '12px' }}>
                        AVG FEES SAVED
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: lime }}>$1,240</div>
                </div>
            </div>

            {/* Chains Table */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                border: '1px solid #222',
                overflow: 'hidden'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#1a1a1a' }}>
                            {['CHAIN', 'VOLUME', 'TRANSACTIONS', 'AVG FEE', 'STATUS'].map((h) => (
                                <th key={h} style={{
                                    padding: '16px 20px',
                                    textAlign: h === 'CHAIN' ? 'left' : 'right',
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
                        {chains.map((chain, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                <td style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: i === 0 ? lime : '#333',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 900,
                                            fontSize: '12px',
                                            color: i === 0 ? '#0A0A0A' : '#888'
                                        }}>
                                            {chain.symbol.slice(0, 2)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '14px' }}>{chain.name}</div>
                                            <div style={{ fontSize: '12px', color: '#666' }}>{chain.symbol}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '20px', textAlign: 'right', fontWeight: 700, fontSize: '14px' }}>{chain.volume}</td>
                                <td style={{ padding: '20px', textAlign: 'right', fontSize: '13px', color: '#888' }}>{chain.txns}</td>
                                <td style={{ padding: '20px', textAlign: 'right', fontSize: '13px', color: '#888' }}>{chain.avgFee}</td>
                                <td style={{ padding: '20px', textAlign: 'right' }}>
                                    <span style={{
                                        padding: '6px 12px',
                                        background: chain.status === 'OPTIMAL' ? 'rgba(205,255,0,0.1)' : 'rgba(255,170,0,0.1)',
                                        color: chain.status === 'OPTIMAL' ? lime : '#ffaa00',
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        borderRadius: '4px'
                                    }}>
                                        {chain.status}
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
