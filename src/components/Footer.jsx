import { motion } from 'framer-motion'
import { Zap, ExternalLink } from 'lucide-react'

const links = {
    Product: ['Features', 'How It Works', 'Energy Dollar', 'Smart Contracts'],
    Network: ['Quai Network', 'Pelagus Wallet', 'Quaiscan Explorer', 'Orchard Testnet'],
    Hackathon: ['GitHub', 'Documentation', 'Smart Contracts', 'Devpost'],
}

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-default)',
            padding: '64px 24px 32px',
        }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                {/* Top row */}
                <div className="footer-grid" style={{ marginBottom: 48 }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                            <Zap size={16} color="var(--quai-green)" />
                            <span style={{ fontWeight: 800, fontSize: 18 }}>
                                <span style={{ color: 'var(--quai-green)' }}>Q</span>uaiWork
                            </span>
                        </div>
                        <p style={{
                            fontSize: 13,
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            maxWidth: 280,
                            marginBottom: 18,
                        }}>
                            Decentralized freelance marketplace on Quai Network. Zero fees, instant settlement, NFT contracts.
                        </p>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            background: 'var(--quai-green-10)',
                            border: '1px solid var(--quai-green-dim)',
                            borderRadius: 'var(--radius-pill)',
                            padding: '5px 14px',
                        }}>
                            <div className="pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--quai-green)' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--quai-green)' }}>
                                Live on Quai Orchard
                            </span>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <div className="section-label" style={{ marginBottom: 18 }}>{group}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {items.map(item => (
                                    <a key={item} href="#" style={{
                                        fontSize: 13,
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'color 0.15s ease',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="divider" />

                {/* Bottom row */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 12,
                }}>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        © 2025 QuaiWork · MIT License · Built for Quai Hackathon
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Powered by</span>
                        <a href="https://qu.ai" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            color: 'var(--quai-green)',
                            textDecoration: 'none',
                        }}>
                            Quai Network <ExternalLink size={10} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
