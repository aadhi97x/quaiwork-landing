import { motion } from 'framer-motion'
import { Lock, Shield, Zap, Globe, TrendingDown, Award, Clock, Users } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import AnimatedGridPattern from './AnimatedGridPattern'

const features = [
    {
        icon: <Lock size={20} />, title: 'Sub-penny Escrow',
        description: "Lock funds for a fraction of a cent. Quai Network's ultra-low fees mean escrow costs almost nothing.",
        highlight: '$0.001 fee', span: 'span 2',
    },
    {
        icon: <Shield size={20} />, title: 'NFT Work Contracts',
        description: 'Every accepted proposal mints a Work Agreement NFT — an immutable, verifiable proof of the deal.',
        highlight: 'ERC-721 on Quai', span: 'span 1',
    },
    {
        icon: <Zap size={20} />, title: 'Instant Settlement',
        description: "One approval click. Funds move directly from escrow to the freelancer's wallet in seconds.",
        highlight: '< 3 seconds', span: 'span 1',
    },
    {
        icon: <Globe size={20} />, title: 'Energy Dollar (Qi)',
        description: "Pay in Qi — the world's first energy-backed token. 1 Qi ≈ 1 kWh of electricity.",
        highlight: 'Qi ≈ 1 kWh', span: 'span 1',
    },
    {
        icon: <TrendingDown size={20} />, title: 'Zero Platform Fee',
        description: "We charge nothing. The smart contract handles everything. QuaiWork earns nothing — that's the point.",
        highlight: '0% commission', span: 'span 1',
    },
    {
        icon: <Award size={20} />, title: 'On-Chain Reputation',
        description: 'Your portfolio of completed NFT contracts is your verifiable track record. No fake reviews.',
        highlight: 'Tamper-proof', span: 'span 2',
    },
    {
        icon: <Clock size={20} />, title: 'Dispute Protection',
        description: 'Built-in dispute mechanism in the escrow contract. Funds stay locked until resolution.',
        highlight: 'Smart contract law', span: 'span 1',
    },
    {
        icon: <Users size={20} />, title: 'Truly Permissionless',
        description: 'No KYC. No account approval. Connect your Pelagus wallet and start in under 60 seconds.',
        highlight: 'No KYC required', span: 'span 1',
    },
]

const platforms = [
    { name: 'Upwork', fee: '20%', color: 'var(--error)', barH: 60 },
    { name: 'Toptal', fee: '15%', color: 'var(--warning)', barH: 45 },
    { name: 'Fiverr', fee: '20%', color: 'var(--error)', barH: 60 },
    { name: 'QuaiWork', fee: '~$0.001', color: 'var(--quai-green)', barH: 3, isUs: true },
]

export default function FeaturesSection() {
    return (
        <section id="features" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>

            {/* ═══ Animated grid background ═══ */}
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.08}
                duration={3}
                fillColor="rgba(78, 255, 160, 0.15)"
                strokeColor="rgba(78, 255, 160, 0.05)"
                maskStyle="radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)"
            />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 56 }}
                >
                    <span className="section-label">WHY QUAIWORK</span>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginTop: 12,
                    }}>
                        Stop paying 20% to a{' '}
                        <span style={{
                            color: 'var(--error)',
                            textDecoration: 'line-through',
                            textDecorationColor: 'var(--error)',
                        }}>middleman</span>
                    </h2>
                    <p style={{
                        fontSize: 16,
                        color: 'var(--text-secondary)',
                        marginTop: 12,
                        maxWidth: 480,
                        margin: '12px auto 0',
                    }}>
                        On a $500 job, Upwork takes{' '}
                        <span style={{ color: 'var(--error)', fontFamily: 'var(--font-mono)' }}>$100</span>.{' '}
                        QuaiWork takes{' '}
                        <span style={{ color: 'var(--quai-green)', fontFamily: 'var(--font-mono)' }}>$0.001</span>.
                    </p>
                </motion.div>

                {/* Fee comparison bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="card"
                    style={{
                        padding: '28px 32px',
                        marginBottom: 56,
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: 28,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {platforms.map(p => (
                        <div key={p.name} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, minWidth: 100,
                        }}>
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: p.barH }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                style={{
                                    width: '100%',
                                    maxWidth: 70,
                                    background: p.isUs
                                        ? `linear-gradient(180deg, ${p.color}, transparent)`
                                        : p.color,
                                    borderRadius: 4,
                                    opacity: p.isUs ? 1 : 0.6,
                                    boxShadow: p.isUs ? `0 0 20px ${p.color}40` : 'none',
                                }}
                            />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: p.color, fontWeight: 600 }}>{p.fee}</span>
                            <span style={{
                                fontSize: 12,
                                color: p.isUs ? 'var(--text-primary)' : 'var(--text-muted)',
                                fontWeight: p.isUs ? 700 : 400,
                            }}>{p.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ═══ Bento Grid with SpotlightCard ═══ */}
                <div className="bento-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            viewport={{ once: true, margin: '-40px' }}
                            style={{ gridColumn: f.span }}
                        >
                            <SpotlightCard
                                className="card card-lift bento-card"
                                spotlightColor="rgba(78, 255, 160, 0.10)"
                                spotlightSize={300}
                            >
                                {/* Icon */}
                                <div style={{
                                    width: 42,
                                    height: 42,
                                    background: 'var(--quai-green-10)',
                                    border: '1px solid var(--quai-green-dim)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 16,
                                    color: 'var(--quai-green)',
                                }}>
                                    {f.icon}
                                </div>

                                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 14 }}>{f.description}</p>

                                {/* Highlight pill */}
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: 10,
                                    color: 'var(--quai-green)',
                                    background: 'var(--quai-green-10)',
                                    border: '1px solid var(--quai-green-dim)',
                                    borderRadius: 'var(--radius-pill)',
                                    padding: '4px 10px',
                                }}>{f.highlight}</span>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
