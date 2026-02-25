import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import ShootingStars from './ShootingStars'

export default function CTASection() {
    return (
        <section id="cta" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>



            {/* ═══ Shooting stars ═══ */}
            <ShootingStars
                starColor="#4EFFA0"
                trailColor="#2EB9DF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1200}
                maxDelay={3500}
            />
            <ShootingStars
                starColor="#1aff8e"
                trailColor="#4EFFA0"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4500}
            />

            {/* Animated pulsing glow */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 900,
                    height: 500,
                    background: 'radial-gradient(ellipse, rgba(78, 255, 160, 0.10) 0%, transparent 65%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />



            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 3 }}
            >
                {/* Chip */}
                <span className="overline-chip" style={{ marginBottom: 24, display: 'inline-flex' }}>
                    <Zap size={11} />
                    LAUNCH IN 60 SECONDS
                </span>

                <h2 style={{
                    fontSize: 'clamp(32px, 5vw, 54px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    marginTop: 20,
                    marginBottom: 20,
                }}>
                    Ready to work<br />
                    <span className="gradient-text">without limits?</span>
                </h2>

                <p style={{
                    fontSize: 17,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 40,
                    maxWidth: 500,
                    margin: '0 auto 40px',
                }}>
                    Connect your Pelagus wallet and start hiring or working immediately.
                    No sign-up forms. No ID checks. Just pure Web3 freedom.
                </p>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
                    <motion.a
                        href="https://pelaguswallet.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: 15, padding: '14px 32px' }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        I'm a Client <ArrowRight size={15} />
                    </motion.a>
                    <motion.a
                        href="https://pelaguswallet.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ fontSize: 15, padding: '14px 32px' }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        I'm a Freelancer <ArrowRight size={15} />
                    </motion.a>
                </div>

                {/* Note */}
                <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Requires Pelagus wallet · Built on Quai Network Cyprus-1
                </p>

                {/* Feature badges */}
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                    {['No KYC', 'Zero fees', 'NFT contracts', 'Open source'].map(b => (
                        <span key={b} style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10,
                            color: 'var(--text-muted)',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-default)',
                            borderRadius: 'var(--radius-pill)',
                            padding: '5px 14px',
                            transition: 'border-color 0.2s ease',
                        }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--quai-green-dim)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-default)'}
                        >
                            {b}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
