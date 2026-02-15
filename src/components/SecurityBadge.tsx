import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SecurityBadgeProps {
    icon: LucideIcon;
    label: string;
}

const SecurityBadge = ({ icon: Icon, label }: SecurityBadgeProps) => {
    return (
        <motion.div
            className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gold/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
        >
            <Icon className="text-gold w-6 h-6" strokeWidth={2} />
            <span className="text-navy font-semibold">{label}</span>
        </motion.div>
    );
};

export default SecurityBadge;
