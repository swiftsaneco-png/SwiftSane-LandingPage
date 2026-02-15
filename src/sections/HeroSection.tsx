import { motion } from 'framer-motion';
import { Button } from '../components/Navbar';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-navy grain-overlay overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border border-gold/10 rounded-lg"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-32 right-20 w-24 h-24 border border-gold/10 rounded-full"
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-16 h-16 border border-gold/10"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-gold font-bold mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                        SwiftSane
                    </h1>
                </motion.div>

                <motion.h2
                    className="text-cream font-bold mb-4"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    Compliance that watches itself.
                </motion.h2>

                <motion.p
                    className="text-cream/80 mb-12 max-w-2xl mx-auto"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Self-hosted. AI-powered. Audit-ready, always.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                >
                    <Button variant="primary" size="lg">
                        Request Demo
                    </Button>
                    <Button variant="secondary" size="lg">
                        How It Works
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1 },
                    y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }}
            >
                <ChevronDown className="text-cream/50 w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
