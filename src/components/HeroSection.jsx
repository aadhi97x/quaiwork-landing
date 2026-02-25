import { motion } from 'framer-motion'
import { Zap, ArrowRight, DollarSign, Clock, Users } from 'lucide-react'
import ShootingStars from './ShootingStars'
import RevealWaveImage from './RevealWaveImage'

/* Word-by-word blur reveal */
function BlurRevealText({ words, style = {}, greenDot = false }) {
    return (
        <div style={style}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: 'blur(12px)', y: 14 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4 + i * 0.12,
                        ease: 'easeOut',
                    }}
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                    {word}
                </motion.span>
            ))}
            {greenDot && (
                <motion.span
                    className="gradient-text"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + words.length * 0.12, duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                >
                    .
                </motion.span>
            )}
        </div>
    )
}

/* Stagger children in sequence */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'var(--bg-base)',
        }}>

            {/* ═══ RevealWaveImage — fullscreen background ═══ */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
            }}>
                <RevealWaveImage
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&auto=format&fit=crop&q=80"
                    waveSpeed={0.15}
                    waveFrequency={0.5}
                    waveAmplitude={0.4}
                    revealRadius={0.5}
                    revealSoftness={1}
                    pixelSize={2}
                    mouseRadius={0.45}
                />
            </div>

            {/* Dark overlay so text stays readable — pass-through for mouse */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.3) 100%)',
                pointerEvents: 'none',
                zIndex: 1,
            }} />

            {/* ═══ Shooting stars ═══ */}
            <ShootingStars
                starColor="#4EFFA0"
                trailColor="#2EB9DF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
                style={{ zIndex: 2 }}
            />
            <ShootingStars
                starColor="#2dd87a"
                trailColor="#1aff8e"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2500}
                maxDelay={5000}
                style={{ zIndex: 2 }}
            />

            {/* Bottom fade */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(to top, var(--bg-base), transparent)',
                pointerEvents: 'none',
                zIndex: 2,
            }} />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    maxWidth: 1200,
                    pointerEvents: 'none',
                    margin: '0 auto',
                    padding: '120px 24px 80px',
                }}
            >
                <div style={{ maxWidth: 680 }}>

                    {/* Overline chip */}
                    <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
                        <span className="overline-chip">
                            <Zap size={11} />
                            BUILT ON QUAI NETWORK
                        </span>
                    </motion.div>

                    {/* ═══ Headline with blur-reveal ═══ */}
                    <div style={{
                        fontSize: 'var(--text-hero)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)',
                        marginBottom: 28,
                    }}>
                        <BlurRevealText words={['Hire', 'talent']} greenDot />
                        <BlurRevealText words={['Pay', 'instantly']} greenDot />
                        <BlurRevealText
                            words={['No', 'middlemen']}
                            greenDot
                            style={{ color: 'var(--text-secondary)', fontWeight: 600 }}
                        />
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontSize: 18,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: 40,
                            maxWidth: 520,
                        }}
                    >
                        The first decentralized freelance marketplace on Quai Network.
                        Escrow costs{' '}
                        <span style={{ color: 'var(--quai-green)', fontFamily: 'var(--font-mono)' }}>$0.001</span>.
                        Payment is instant. Every contract is an NFT.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32, pointerEvents: 'auto' }}>
                        <a href="#cta" className="btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
                            Start as Client <ArrowRight size={15} />
                        </a>
                        <a href="#features" className="btn-secondary" style={{ fontSize: 15, padding: '14px 32px' }}>
                            Explore Features ↓
                        </a>
                    </motion.div>

                    {/* Stat pills */}
                    <motion.div variants={fadeUp} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', pointerEvents: 'auto' }}>
                        {[
                            { icon: <DollarSign size={11} />, label: '$0.001 escrow fee' },
                            { icon: <Clock size={11} />, label: 'Instant settlement' },
                            { icon: <Users size={11} />, label: 'NFT contracts' },
                        ].map(({ icon, label }) => (
                            <div key={label} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                background: 'rgba(10,10,10,0.7)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid var(--border-default)',
                                borderRadius: 'var(--radius-pill)',
                                padding: '7px 16px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: 11,
                                color: 'var(--text-secondary)',
                            }}>
                                <span style={{ color: 'var(--quai-green)' }}>{icon}</span>
                                {label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: 36,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    animation: 'float 2.5s ease-in-out infinite',
                }}
            >
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                }}>
                    scroll
                </span>
                <div style={{
                    width: 1,
                    height: 36,
                    background: 'linear-gradient(to bottom, var(--quai-green-dim), transparent)',
                }} />
            </motion.div>
        </section>
    )
}
