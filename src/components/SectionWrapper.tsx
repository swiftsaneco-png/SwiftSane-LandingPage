import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
    return (
        <motion.section
            id={id}
            className={`relative overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
