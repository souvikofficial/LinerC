"use client";

import { useState } from 'react';

const lime = '#CDFF00';
const darkGray = '#141414';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    SETTINGS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>Manage your account and preferences</p>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '32px',
                borderBottom: '1px solid #222',
                paddingBottom: '16px'
            }}>
                {['general', 'api', 'notifications', 'billing'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 20px',
                            background: activeTab === tab ? lime : 'transparent',
                            color: activeTab === tab ? '#0A0A0A' : '#666',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: 700,
                            fontSize: '11px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* General Settings */}
            {activeTab === 'general' && (
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
                        textTransform: 'uppercase',
                        color: lime
                    }}>
                        ACCOUNT DETAILS
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '8px', letterSpacing: '0.1em' }}>
                                ORGANIZATION NAME
                            </label>
                            <input
                                type="text"
                                defaultValue="LinerC Demo"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    padding: '14px 18px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '8px', letterSpacing: '0.1em' }}>
                                EMAIL
                            </label>
                            <input
                                type="email"
                                defaultValue="demo@linerc.com"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    padding: '14px 18px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '8px', letterSpacing: '0.1em' }}>
                                TIMEZONE
                            </label>
                            <select
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    padding: '14px 18px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            >
                                <option>UTC (GMT+0)</option>
                                <option>EST (GMT-5)</option>
                                <option>PST (GMT-8)</option>
                                <option>IST (GMT+5:30)</option>
                            </select>
                        </div>

                        <button style={{
                            width: 'fit-content',
                            padding: '14px 32px',
                            background: lime,
                            color: '#0A0A0A',
                            border: 'none',
                            borderRadius: '0',
                            fontWeight: 800,
                            fontSize: '12px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginTop: '16px'
                        }}>
                            SAVE CHANGES
                        </button>
                    </div>
                </div>
            )}

            {/* API Settings */}
            {activeTab === 'api' && (
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
                        textTransform: 'uppercase',
                        color: lime
                    }}>
                        API KEYS
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { name: 'Production', key: 'pk_live_linerc_...9a8b', created: 'Dec 1, 2024', status: 'ACTIVE' },
                            { name: 'Development', key: 'pk_test_linerc_...3c4d', created: 'Nov 15, 2024', status: 'ACTIVE' },
                        ].map((apiKey, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px',
                                background: '#1a1a1a',
                                borderRadius: '8px',
                                border: '1px solid #333'
                            }}>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>
                                        {apiKey.name}
                                    </div>
                                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
                                        {apiKey.key}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: 'rgba(205,255,0,0.1)',
                                        color: lime,
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        borderRadius: '4px'
                                    }}>
                                        {apiKey.status}
                                    </span>
                                    <button style={{
                                        padding: '10px 16px',
                                        background: '#222',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontWeight: 700,
                                        fontSize: '11px',
                                        cursor: 'pointer'
                                    }}>
                                        REVEAL
                                    </button>
                                    <button style={{
                                        padding: '10px 16px',
                                        background: '#330000',
                                        color: '#ff6464',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontWeight: 700,
                                        fontSize: '11px',
                                        cursor: 'pointer'
                                    }}>
                                        REVOKE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button style={{
                        padding: '14px 32px',
                        background: lime,
                        color: '#0A0A0A',
                        border: 'none',
                        borderRadius: '0',
                        fontWeight: 800,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginTop: '24px'
                    }}>
                        CREATE NEW KEY
                    </button>
                </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
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
                        textTransform: 'uppercase',
                        color: lime
                    }}>
                        NOTIFICATION PREFERENCES
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { label: 'Payment alerts', desc: 'Get notified for every payment', enabled: true },
                            { label: 'Weekly digest', desc: 'Summary of your weekly activity', enabled: true },
                            { label: 'Failed payments', desc: 'Alert when a payment fails', enabled: true },
                            { label: 'Marketing emails', desc: 'News and product updates', enabled: false },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px',
                                background: '#1a1a1a',
                                borderRadius: '8px'
                            }}>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>
                                        {item.desc}
                                    </div>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '28px',
                                    background: item.enabled ? lime : '#333',
                                    borderRadius: '14px',
                                    position: 'relative',
                                    cursor: 'pointer'
                                }}>
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: item.enabled ? '#0A0A0A' : '#666',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: '3px',
                                        left: item.enabled ? '23px' : '3px',
                                        transition: 'left 0.2s'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Billing */}
            {activeTab === 'billing' && (
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
                        textTransform: 'uppercase',
                        color: lime
                    }}>
                        CURRENT PLAN
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginBottom: '32px'
                    }}>
                        <div style={{
                            flex: 1,
                            padding: '24px',
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            border: `2px solid ${lime}`
                        }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: lime, marginBottom: '8px', letterSpacing: '0.1em' }}>
                                CURRENT
                            </div>
                            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>
                                PRO
                            </div>
                            <div style={{ fontSize: '13px', color: '#666' }}>
                                $49/month • Unlimited events
                            </div>
                        </div>
                        <div style={{
                            flex: 1,
                            padding: '24px',
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '8px', letterSpacing: '0.1em' }}>
                                UPGRADE
                            </div>
                            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>
                                ENTERPRISE
                            </div>
                            <div style={{ fontSize: '13px', color: '#666' }}>
                                Custom pricing • Dedicated support
                            </div>
                        </div>
                    </div>

                    <button style={{
                        padding: '14px 32px',
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
                        CONTACT SALES
                    </button>
                </div>
            )}
        </div>
    );
}
