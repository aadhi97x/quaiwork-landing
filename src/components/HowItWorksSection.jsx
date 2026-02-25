import { motion } from 'framer-motion'
import { FileText, Wallet, CheckCircle } from 'lucide-react'
import AnimatedGridPattern from './AnimatedGridPattern'
import ShootingStars from './ShootingStars'
import SpotlightCard from './SpotlightCard'

const steps = [
    {
        icon: <FileText size={22} />,
        number: '01',
        title: 'Post a Job',
        description: 'Describe your project, set a budget in QUAI, and post. Funds are escrowed instantly on-chain — no credit cards, no intermediaries.',
        tag: 'Client',
        tagColor: '#4E9FFF',
        tagBg: 'rgba(78, 159, 255, 0.10)',
    },
    {
        icon: <Wallet size={22} />,
        number: '02',
        title: 'Escrow & Agree',
        description: 'Freelancers submit proposals. Accept the best one — the smart contract mints a Work Agreement NFT and locks the budget.',
        tag: 'On-Chain',
        tagColor: 'var(--quai-green)',
        tagBg: 'var(--quai-green-10)',
    },
    {
        icon: <CheckCircle size={22} />,
        number: '03',
        title: 'Release Payment',
        description: "Work is delivered. One click releases payment directly to the freelancer's wallet. No 5-day holds. No percentage cuts.",
        tag: 'Instant',
        tagColor: '#FFB84E',
        tagBg: 'rgba(255, 184, 78, 0.10)',
    },
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>

            {/* ═══ Animated grid background ═══ */}
            <AnimatedGridPattern
                numSquares={20}
                maxOpacity={0.06}
                duration={4}
                fillColor="rgba(78, 255, 160, 0.12)"
                strokeColor="rgba(78, 255, 160, 0.04)"
                maskStyle="radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 100%)"
            />

            {/* ═══ Subtle shooting stars ═══ */}
            <ShootingStars
                starColor="#4EFFA0"
                trailColor="#2EB9DF"
                minSpeed={8}
                maxSpeed={20}
                minDelay={3000}
                maxDelay={6000}
                style={{ opacity: 0.4 }}
            />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 72 }}
                >
                    <span className="overline-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>
                        HOW IT WORKS
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginTop: 16,
                    }}>
                        From idea to paid in{' '}
                        <span className="gradient-text">three steps</span>
                    </h2>
                    <p style={{
                        fontSize: 16,
                        color: 'var(--text-secondary)',
                        marginTop: 12,
                        maxWidth: 480,
                        margin: '12px auto 0',
                    }}>
                        No paperwork. No waiting. Pure on-chain efficiency.
                    </p>
                </motion.div>

                {/* Steps grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 20,
                    position: 'relative',
                }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard
                                className="card card-lift"
                                spotlightColor="rgba(78, 255, 160, 0.08)"
                                spotlightSize={350}
                                style={{ padding: '32px 28px' }}
                            >
                                {/* Top green accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    background: 'linear-gradient(to right, var(--quai-green), transparent)',
                                    opacity: 0.5,
                                }} />

                                {/* Number + Icon */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 20,
                                }}>
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        background: 'var(--quai-green-10)',
                                        border: '1px solid var(--quai-green-dim)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--quai-green)',
                                    }}>
                                        {step.icon}
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: 11,
                                        color: 'var(--text-muted)',
                                        letterSpacing: '0.1em',
                                    }}>
                                        STEP {step.number}
                                    </span>
                                </div>

                                {/* Tag */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: step.tagBg,
                                    color: step.tagColor,
                                    borderRadius: 'var(--radius-pill)',
                                    padding: '3px 10px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: 10,
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    marginBottom: 14,
                                }}>
                                    {step.tag}
                                </div>

                                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.description}</p>

                                {/* Bottom line */}
                                <div style={{
                                    marginTop: 24,
                                    height: 2,
                                    background: 'linear-gradient(to right, var(--quai-green), transparent)',
                                    borderRadius: 1,
                                    opacity: 0.3,
                                }} />
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
