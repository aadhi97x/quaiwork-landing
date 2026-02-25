import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCountUp(target, duration = 1600, inView) {
    const [value, setValue] = useState(0)
    const frame = useRef()
    useEffect(() => {
        if (!inView) return
        const start = performance.now()
        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if (progress < 1) frame.current = requestAnimationFrame(tick)
        }
        frame.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame.current)
    }, [target, duration, inView])
    return value
}

const stats = [
    { rawValue: 0, prefix: '$', suffix: '.001', label: 'Average Escrow Fee', sub: 'vs $100+ on Upwork' },
    { rawValue: 0, prefix: '', suffix: '%', label: 'Platform Commission', sub: 'You keep everything' },
    { rawValue: 3, prefix: '<', suffix: 's', label: 'Settlement Time', sub: 'On Quai Network' },
    { rawValue: 100, prefix: '', suffix: '%', label: 'On-Chain Escrow', sub: 'Always trustless' },
]

function StatItem({ stat, inView, index }) {
    const num = useCountUp(stat.rawValue, 1600, inView)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', padding: '0 20px', flex: 1, minWidth: 140 }}
        >
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--quai-green)',
                lineHeight: 1,
                marginBottom: 8,
            }}>
                {stat.prefix}{num}{stat.suffix}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>
                {stat.label}
            </div>
            {stat.sub && (
                <div style={{
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginTop: 4,
                }}>
                    {stat.sub}
                </div>
            )}
        </motion.div>
    )
}

export default function StatsBar() {
    const ref = useRef()
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
            { threshold: 0.3 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <section ref={ref} style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-default)',
            borderBottom: '1px solid var(--border-default)',
            padding: '56px 24px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                height: 200,
                background: 'radial-gradient(ellipse, rgba(78, 255, 160, 0.04), transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: 1100,
                margin: '0 auto',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 32,
            }}>
                {stats.map((stat, i) => (
                    <StatItem key={i} stat={stat} inView={inView} index={i} />
                ))}
            </div>
        </section>
    )
}
