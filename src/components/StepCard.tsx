import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StepCardProps {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

const StepCard = ({ number, icon: Icon, title, description }: StepCardProps) => {
    return (
        <motion.div
            className="relative bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg">
                    {number}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon className="text-gold w-6 h-6" strokeWidth={2} />
                        <h3 className="text-xl font-bold text-navy">{title}</h3>
                    </div>
                    <p className="text-navy/80 leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default StepCard;
