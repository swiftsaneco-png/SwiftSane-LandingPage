import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Button } from '../components/Navbar';

const CTASection = () => {
    return (
        <SectionWrapper className="bg-navy py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.h2
                    className="text-cream font-bold mb-6"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Ready to never panic before an audit again?
                </motion.h2>

                <motion.p
                    className="text-cream/70 mb-10"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    Deploy on your infrastructure. Own your compliance.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Button variant="primary" size="lg">
                        Request Demo
                    </Button>
                    <Button variant="secondary" size="lg">
                        View Documentation
                    </Button>
                </motion.div>

                <motion.p
                    className="text-cream/60 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    viewport={{ once: true }}
                >
                    No credit card. No cloud upload. Your infrastructure.
                </motion.p>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
