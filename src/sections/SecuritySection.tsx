import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Server, Lock, ShieldCheck, FileText, Database, Cpu } from 'lucide-react';

const SecuritySection = () => {
    return (
        <SectionWrapper id="security" className="bg-navy py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="text-cream font-bold text-center mb-12"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Your data never leaves your walls.
                </motion.h2>

                {/* Illustration */}
                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative bg-navy/40 backdrop-blur p-8 rounded-2xl border-4 border-gold/30">
                        <div className="text-center mb-6">
                            <Server className="inline-block text-gold w-16 h-16 mb-3" strokeWidth={1.5} />
                            <p className="text-cream font-semibold text-sm">Your Infrastructure</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-navy/60 p-4 rounded-lg text-center border border-gold/20">
                                <div className="text-cream/60 text-xs mb-1">Documents</div>
                                <FileText className="text-gold w-12 h-12 mx-auto" strokeWidth={1.5} />
                            </div>
                            <div className="bg-navy/60 p-4 rounded-lg text-center border border-gold/20">
                                <div className="text-cream/60 text-xs mb-1">Database</div>
                                <Database className="text-gold w-12 h-12 mx-auto" strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-gold p-4 rounded-xl border-4 border-navy">
                            <div className="text-navy text-xs font-semibold mb-1">SwiftSane AI</div>
                            <Cpu className="text-navy w-8 h-8 mx-auto" strokeWidth={2} />
                        </div>

                        <div className="text-center pt-4 border-t-2 border-gold/20">
                            <div className="inline-flex items-center gap-2 text-cream/60 text-sm">
                                <Lock className="w-4 h-4" />
                                <span>Data stays local</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Security badges */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    <motion.div
                        className="flex items-center gap-3 bg-navy/40 backdrop-blur p-4 rounded-lg border border-gold/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Server className="text-gold w-6 h-6" strokeWidth={2} />
                        <span className="text-cream font-semibold">100% Self-Hosted</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-3 bg-navy/40 backdrop-blur p-4 rounded-lg border border-gold/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Lock className="text-gold w-6 h-6" strokeWidth={2} />
                        <span className="text-cream font-semibold">Zero-Knowledge</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-3 bg-navy/40 backdrop-blur p-4 rounded-lg border border-gold/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <ShieldCheck className="text-gold w-6 h-6" strokeWidth={2} />
                        <span className="text-cream font-semibold">SHA-256 Verified</span>
                    </motion.div>
                </div>

                {/* Quote */}
                <motion.blockquote
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        <span className="text-gold text-6xl absolute -top-4 -left-4 opacity-50">"</span>
                        <p className="text-cream italic font-medium text-2xl md:text-3xl px-8">
                            Your secrets stay secret. We just make them organized.
                        </p>
                        <span className="text-gold text-6xl absolute -bottom-12 -right-4 opacity-50">"</span>
                    </div>
                </motion.blockquote>
            </div>
        </SectionWrapper>
    );
};

export default SecuritySection;
