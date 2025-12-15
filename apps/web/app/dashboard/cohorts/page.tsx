"use client";

const lime = '#CDFF00';
const darkGray = '#141414';

export default function CohortsPage() {
    const cohorts = [
        { date: 'Dec 15', users: 245, day1: '92%', day3: '78%', day7: '65%', day14: '52%', day30: '41%' },
        { date: 'Dec 14', users: 312, day1: '89%', day3: '74%', day7: '61%', day14: '48%', day30: '38%' },
        { date: 'Dec 13', users: 189, day1: '94%', day3: '81%', day7: '68%', day14: '55%', day30: '44%' },
        { date: 'Dec 12', users: 278, day1: '91%', day3: '76%', day7: '63%', day14: '50%', day30: '40%' },
        { date: 'Dec 11', users: 356, day1: '88%', day3: '72%', day7: '59%', day14: '46%', day30: '36%' },
    ];

    const getOpacity = (val: string) => {
        const num = parseInt(val);
        return num > 80 ? 1 : num > 60 ? 0.8 : num > 40 ? 0.6 : num > 20 ? 0.4 : 0.2;
    };

    return (
        <div style={{ color: '#fff' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    COHORTS
                </h1>
                <p style={{ color: '#666', fontSize: '14px' }}>User retention by signup date</p>
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
                            {['DATE', 'USERS', 'DAY 1', 'DAY 3', 'DAY 7', 'DAY 14', 'DAY 30'].map((h) => (
                                <th key={h} style={{
                                    padding: '16px 20px',
                                    textAlign: h === 'DATE' ? 'left' : 'right',
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
                        {cohorts.map((cohort, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '13px' }}>{cohort.date}</td>
                                <td style={{ padding: '16px 20px', textAlign: 'right', fontSize: '13px', color: '#888' }}>{cohort.users}</td>
                                {[cohort.day1, cohort.day3, cohort.day7, cohort.day14, cohort.day30].map((val, j) => (
                                    <td key={j} style={{ padding: '12px 16px', textAlign: 'right' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '6px 12px',
                                            background: lime,
                                            opacity: getOpacity(val),
                                            color: '#0A0A0A',
                                            fontWeight: 700,
                                            fontSize: '12px',
                                            borderRadius: '4px'
                                        }}>
                                            {val}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
