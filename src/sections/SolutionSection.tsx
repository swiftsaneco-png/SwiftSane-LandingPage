import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Grid3x3, Brain, Shield } from 'lucide-react';

const SolutionSection = () => {
    const pillars = [
        {
            icon: Grid3x3,
            title: 'Dynamic Compliance Slots',
            description: 'Automatically generated document placeholders based on your industry. See exactly what you\'re missing at a glance.'
        },
        {
            icon: Brain,
            title: 'AI Compliance Coach',
            description: 'Our AI reads your documents, detects errors, expired dates, and provides specific fixes. Not just storage — intelligence.'
        },
        {
            icon: Shield,
            title: 'Cryptographic Integrity',
            description: 'SHA-256 hash verification on every upload. Any tampering triggers instant alerts. Trust, mathematically proven.'
        }
    ];

    return (
        <SectionWrapper id="features" className="bg-navy py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <h2 className="text-cream font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                        One platform. Complete clarity.
                    </h2>
                    <p className="text-cream/70 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                        SwiftSane doesn't just store documents. It understands them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
                    {/* Decorative connecting line */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gold/30" style={{ zIndex: 0 }} />

                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="relative z-10"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-navy rounded-full border-2 border-gold">
                                    <pillar.icon className="text-gold w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-cream font-bold text-2xl mb-3">{pillar.title}</h3>
                                <p className="text-cream/80 leading-relaxed">{pillar.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SolutionSection;
