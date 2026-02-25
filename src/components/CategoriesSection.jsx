import { motion } from 'framer-motion'
import {
    Code, Palette, TrendingUp, Megaphone, FileText, Shield, Smartphone, Database
} from 'lucide-react'

const categories = [
    { icon: <Code size={20} />, name: 'Development', count: '2.4k+ jobs' },
    { icon: <Palette size={20} />, name: 'Design', count: '1.8k+ jobs' },
    { icon: <TrendingUp size={20} />, name: 'DeFi & Trading', count: '960+ jobs' },
    { icon: <Megaphone size={20} />, name: 'Marketing', count: '1.2k+ jobs' },
    { icon: <FileText size={20} />, name: 'Writing', count: '780+ jobs' },
    { icon: <Shield size={20} />, name: 'Auditing', count: '540+ jobs' },
    { icon: <Smartphone size={20} />, name: 'Mobile', count: '870+ jobs' },
    { icon: <Database size={20} />, name: 'Data & AI', count: '1.1k+ jobs' },
]

export default function CategoriesSection() {
    return (
        <section id="categories" style={{ padding: '100px 24px', position: 'relative' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 56 }}
                >
                    <span className="section-label">CATEGORIES</span>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginTop: 12,
                    }}>
                        Find work in{' '}
                        <span className="gradient-text">any field</span>
                    </h2>
                    <p style={{
                        fontSize: 16,
                        color: 'var(--text-secondary)',
                        marginTop: 12,
                        maxWidth: 460,
                        margin: '12px auto 0',
                    }}>
                        From smart contract audits to UI design — every skill has a home on QuaiWork.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 14,
                }}>
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            viewport={{ once: true, margin: '-30px' }}
                            className="card card-lift"
                            style={{
                                padding: '22px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{
                                width: 42,
                                height: 42,
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--quai-green-10)',
                                border: '1px solid var(--quai-green-dim)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--quai-green)',
                                flexShrink: 0,
                            }}>
                                {cat.icon}
                            </div>
                            <div>
                                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{cat.name}</div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{cat.count}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
