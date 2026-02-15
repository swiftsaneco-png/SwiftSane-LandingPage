import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor?: string;
    textColor?: string;
    bgColor?: string;
}

const FeatureCard = ({
    icon: Icon,
    title,
    description,
    iconColor = 'text-gold',
    textColor = 'text-navy',
    bgColor = 'bg-white'
}: FeatureCardProps) => {
    return (
        <motion.div
            className={`${bgColor} ${textColor} p-6 rounded-xl border-2 border-transparent cursor-pointer`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{
                y: -4,
                borderColor: '#B88746',
                boxShadow: '0 10px 30px rgba(7, 44, 80, 0.1)'
            }}
        >
            <Icon className={`${iconColor} w-10 h-10 mb-4`} strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="opacity-80 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default FeatureCard;
