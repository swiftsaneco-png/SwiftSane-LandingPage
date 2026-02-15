import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CheckCircle, FileText, TrendingUp, LayoutDashboard } from 'lucide-react';

const DashboardPreviewSection = () => {
    return (
        <SectionWrapper className="bg-navy py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="text-cream font-bold text-center mb-12"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    See it in action
                </motion.h2>

                <motion.div
                    className="bg-cream border-4 border-cream rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '1200px', margin: '0 auto' }}
                >
                    {/* Mock browser header */}
                    <div className="bg-navy/90 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold/50" />
                            <div className="w-3 h-3 rounded-full bg-gold/50" />
                            <div className="w-3 h-3 rounded-full bg-gold/50" />
                        </div>
                        <div className="flex-1 text-center text-cream/50 text-sm">app.swiftsane.io/dashboard</div>
                    </div>

                    {/* Dashboard content */}
                    <div className="bg-gradient-to-br from-navy to-navy/80 p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Sidebar */}
                            <div className="lg:col-span-1 space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gold/10 rounded-lg border border-gold/30">
                                    <LayoutDashboard className="text-gold w-5 h-5" />
                                    <span className="text-cream font-semibold text-sm">Dashboard</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream/5 transition-colors">
                                    <FileText className="text-cream/70 w-5 h-5" />
                                    <span className="text-cream/70 text-sm">Documents</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream/5 transition-colors">
                                    <TrendingUp className="text-cream/70 w-5 h-5" />
                                    <span className="text-cream/70 text-sm">Analytics</span>
                                </div>
                            </div>

                            {/* Main area */}
                            <div className="lg:col-span-3 space-y-6">
                                {/* Compliance Score */}
                                <div className="bg-cream/95 backdrop-blur p-6 rounded-xl">
                                    <h3 className="text-navy font-bold text-lg mb-4">Compliance Score</h3>
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-32 h-32">
                                            <svg className="transform -rotate-90 w-32 h-32">
                                                <circle cx="64" cy="64" r="56" stroke="rgba(7, 44, 80, 0.1)" strokeWidth="8" fill="none" />
                                                <circle cx="64" cy="64" r="56" stroke="#B88746" strokeWidth="8" fill="none"
                                                    strokeDasharray="351.86" strokeDashoffset="70.37" strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-navy font-bold text-2xl">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Document cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-navy font-semibold text-sm">ISO 27001 Certificate</h4>
                                            <CheckCircle className="text-gold w-5 h-5" />
                                        </div>
                                        <p className="text-navy/60 text-xs">Verified • Expires 2026-12-31</p>
                                        <div className="mt-3 bg-gold/20 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gold h-full" style={{ width: '100%' }} />
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-navy font-semibold text-sm">Privacy Policy</h4>
                                            <CheckCircle className="text-gold w-5 h-5" />
                                        </div>
                                        <p className="text-navy/60 text-xs">Verified • Updated 2026-01-15</p>
                                        <div className="mt-3 bg-gold/20 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gold h-full" style={{ width: '100%' }} />
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg opacity-60">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-navy font-semibold text-sm">Incident Response Plan</h4>
                                            <div className="w-5 h-5 border-2 border-navy/30 rounded-full" />
                                        </div>
                                        <p className="text-navy/60 text-xs">Missing</p>
                                        <div className="mt-3 bg-navy/10 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gold h-full" style={{ width: '60%' }} />
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg opacity-60">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-navy font-semibold text-sm">Backup Procedures</h4>
                                            <div className="w-5 h-5 border-2 border-navy/30 rounded-full" />
                                        </div>
                                        <p className="text-navy/60 text-xs">Pending Review</p>
                                        <div className="mt-3 bg-navy/10 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gold h-full" style={{ width: '75%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default DashboardPreviewSection;
