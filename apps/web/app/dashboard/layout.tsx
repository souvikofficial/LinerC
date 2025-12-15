import { Sidebar } from "@/components/sidebar"

const lime = '#CDFF00';
const dark = '#0A0A0A';
const darkGray = '#141414';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: dark,
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <Sidebar />
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <header style={{
                    height: '64px',
                    background: dark,
                    borderBottom: `1px solid ${darkGray}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 32px'
                }}>
                    <div style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#666',
                        textTransform: 'uppercase'
                    }}>
                        DASHBOARD
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{
                            padding: '6px 12px',
                            background: darkGray,
                            borderRadius: '4px',
                            fontSize: '11px',
                            color: lime,
                            fontWeight: 700
                        }}>
                            V2 API LIVE
                        </span>
                    </div>
                </header>

                {/* Main Content */}
                <main style={{
                    flex: 1,
                    overflow: 'auto',
                    padding: '32px',
                    background: '#0D0D0D'
                }}>
                    {children}
                </main>
            </div>
        </div>
    )
}
