import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const HowItWorksSection = () => {
    const steps = [
        {
            number: '01',
            title: 'Select Framework',
            description: 'Choose from ISO 27001, GDPR, SOC 2, or custom frameworks'
        },
        {
            number: '02',
            title: 'Upload Documents',
            description: 'Drag and drop into auto-generated compliance slots'
        },
        {
            number: '03',
            title: 'AI Verification',
            description: 'Instant analysis, error detection, and suggested fixes'
        },
        {
            number: '04',
            title: 'Track Health',
            description: 'Real-time compliance score dashboard updated daily'
        },
        {
            number: '05',
            title: 'Audit Ready',
            description: 'One-click auditor notification when you hit 100%'
        }
    ];

    return (
        <SectionWrapper id="how-it-works" className="bg-navy py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="text-cream font-bold text-center mb-16"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    From chaos to confidence
                </motion.h2>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            className="bg-navy/40 backdrop-blur p-6 rounded-xl border border-gold/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg">
                                    {step.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-cream mb-2">{step.title}</h3>
                                    <p className="text-cream/80 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HowItWorksSection;
