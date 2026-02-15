import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-navy py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        className="text-2xl font-bold text-gold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        SwiftSane
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-cream text-sm">
                        <a href="#product" className="hover:text-gold">Product</a>
                        <a href="#security" className="hover:text-gold">Security</a>
                        <a href="#docs" className="hover:text-gold">Documentation</a>
                        <a href="#contact" className="hover:text-gold">Contact</a>
                    </div>

                    <div className="w-full md:w-1/2 h-px bg-gold opacity-50" />

                    <p className="text-cream/50 text-sm text-center">
                        © 2025 SwiftSane. Engineered for compliance.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
