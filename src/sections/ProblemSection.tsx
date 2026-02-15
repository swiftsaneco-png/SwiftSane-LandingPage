import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import FeatureCard from '../components/FeatureCard';
import { FileX, AlertCircle, FolderX, Clock } from 'lucide-react';

const ProblemSection = () => {
    const problems = [
        {
            icon: FileX,
            title: 'Missing Documents',
            description: 'Critical files disappear right when you need them most.'
        },
        {
            icon: AlertCircle,
            title: 'Expired Certificates',
            description: 'Certifications lapse without warning, putting compliance at risk.'
        },
        {
            icon: FolderX,
            title: 'Wrong File Locations',
            description: 'Documents scattered across drives, folders, and email threads.'
        },
        {
            icon: Clock,
            title: 'Last-Minute Panic',
            description: 'Scrambling days before audits to gather everything together.'
        }
    ];

    return (
        <SectionWrapper className="bg-navy py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-cream font-bold mb-16 leading-tight"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    67% of audit failures aren't about compliance.
                    <br />
                    They're about paperwork.
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <FeatureCard
                                {...problem}
                                bgColor="bg-navy/40 backdrop-blur"
                                textColor="text-cream"
                                iconColor="text-gold"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProblemSection;
