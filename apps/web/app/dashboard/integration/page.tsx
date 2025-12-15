"use client";

import { useState } from 'react';

const lime = '#CDFF00';
const dark = '#0A0A0A';
const darkGray = '#141414';

export default function IntegrationPage() {
    const [copied, setCopied] = useState(false);
    const [simulated, setSimulated] = useState(false);

    const apiKey = 'pk_live_linerc_demo_9a8b7c6d5e4f3g2h1i';

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const simulateEvent = () => {
        setSimulated(true);
        setTimeout(() => setSimulated(false), 3000);
    };

    const curlCommand = `curl -X POST https://api.linerc.com/v2/ingest \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{"event": "payment", "amount": 100}'`;

    return (
        <div style={{ color: '#fff', maxWidth: '900px' }}>
            {/* Page Header */}
            <div style={{ marginBottom: '48px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    background: 'rgba(205,255,0,0.1)',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: lime,
                    marginBottom: '16px',
                    letterSpacing: '0.1em'
                }}>
                    INTEGRATION STUDIO
                </div>
                <h1 style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px'
                }}>
                    GET STARTED
                </h1>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.6 }}>
                    Integrate LinerC in minutes. No complex setup required.
                </p>
            </div>

            {/* Step 1: API Key */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: `1px solid #222`,
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: lime
                }} />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                }}>
                    <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: lime,
                        color: dark,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '14px'
                    }}>1</span>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>YOUR API KEY</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <div style={{
                        flex: 1,
                        padding: '16px 20px',
                        background: '#1a1a1a',
                        borderRadius: '8px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        color: '#888'
                    }}>
                        {apiKey}
                    </div>
                    <button
                        onClick={() => copyToClipboard(apiKey)}
                        style={{
                            padding: '16px 24px',
                            background: copied ? lime : '#222',
                            color: copied ? dark : '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '12px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            transition: 'all 0.2s'
                        }}
                    >
                        {copied ? '✓ COPIED' : 'COPY'}
                    </button>
                </div>
            </div>

            {/* Step 2: Code Snippet */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: `1px solid #222`,
                marginBottom: '24px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                }}>
                    <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#333',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '14px'
                    }}>2</span>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>SEND YOUR FIRST EVENT</span>
                </div>
                <div style={{
                    padding: '20px',
                    background: '#0a0a0a',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: '#888',
                    overflow: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                        <span style={{ color: '#666' }}>$</span> {curlCommand}
                    </pre>
                </div>
                <button
                    onClick={() => copyToClipboard(curlCommand)}
                    style={{
                        marginTop: '16px',
                        padding: '12px 20px',
                        background: '#222',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '11px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                >
                    COPY COMMAND
                </button>
            </div>

            {/* Step 3: Test */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: `1px solid #222`,
                marginBottom: '24px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                }}>
                    <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#333',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '14px'
                    }}>3</span>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>TEST YOUR INTEGRATION</span>
                </div>

                <button
                    onClick={simulateEvent}
                    disabled={simulated}
                    style={{
                        padding: '20px 40px',
                        background: simulated ? '#1a3d00' : lime,
                        color: simulated ? lime : dark,
                        border: 'none',
                        borderRadius: '0',
                        fontWeight: 800,
                        fontSize: '14px',
                        cursor: simulated ? 'default' : 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.2s'
                    }}
                >
                    {simulated ? '✓ EVENT RECEIVED' : 'SIMULATE EVENT →'}
                </button>

                {simulated && (
                    <div style={{
                        marginTop: '24px',
                        padding: '20px',
                        background: 'rgba(205,255,0,0.05)',
                        border: `1px solid ${lime}33`,
                        borderRadius: '8px'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>EVENT ID</div>
                                <div style={{ fontFamily: 'monospace', fontSize: '14px', color: lime }}>
                                    evt_{Math.random().toString(36).substring(2, 10)}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>LATENCY</div>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: lime }}>45ms</div>
                            </div>
                            <div style={{
                                padding: '8px 16px',
                                background: lime,
                                color: dark,
                                fontWeight: 800,
                                fontSize: '11px',
                                borderRadius: '4px'
                            }}>
                                200 OK
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Next Steps */}
            <div style={{
                background: darkGray,
                borderRadius: '12px',
                padding: '32px',
                border: `1px solid #222`
            }}>
                <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '24px'
                }}>
                    WHAT'S NEXT?
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px'
                }}>
                    {[
                        { title: 'READ DOCS', desc: 'Full API reference', link: '#' },
                        { title: 'VIEW EVENTS', desc: 'See your payments', link: '/dashboard/events' },
                        { title: 'JOIN DISCORD', desc: 'Get support', link: '#' },
                    ].map((item) => (
                        <a key={item.title} href={item.link} style={{
                            padding: '20px',
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#fff',
                            transition: 'background 0.2s'
                        }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                marginBottom: '4px'
                            }}>
                                {item.title} →
                            </div>
                            <div style={{ fontSize: '12px', color: '#666' }}>
                                {item.desc}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
