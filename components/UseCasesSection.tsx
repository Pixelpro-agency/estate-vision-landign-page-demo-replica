'use client';
import React from 'react';
import { Building2, Zap, Landmark, Layers, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UseCasesSection() {
    const industryCases = [
        {
            category: "Governments & Defense",
            icon: <Building2 className="w-5 h-5" />, // Standard outline size
            items: [
                "Territory stability monitoring",
                "Critical infrastructure protection",
                "Crisis response coordination"
            ]
        },
        {
            category: "Utilities & Energy",
            icon: <Zap className="w-5 h-5" />,
            items: [
                "Grid resilience forecasting",
                "Asset vulnerability scoring",
                "Outage prediction models"
            ]
        },
        {
            category: "Financial Institutions",
            icon: <Landmark className="w-5 h-5" />,
            items: [
                "Physical risk underwriting",
                "Portfolio exposure analysis",
                "Sovereign risk intelligence"
            ]
        }
    ];

    const roleCases = [
        {
            category: "Enterprise",
            icon: <Layers className="w-6 h-6 text-white" />, // Larger, filled/bright style
            items: [
                "Global portfolio risk aggregation",
                "M&A due diligence intelligence",
                "Sustainability & ESG compliance"
            ]
        },
        {
            category: "Asset Manager",
            icon: <Activity className="w-6 h-6 text-white" />,
            items: [
                "Predictive maintenance scheduling",
                "Energy consumption optimization",
                "Operational uptime maximization"
            ]
        },
        {
            category: "Security Manager",
            icon: <Shield className="w-6 h-6 text-white" />,
            items: [
                "Real-time threat perimeter monitoring",
                "Automated incident response protocols",
                "Physical breach predictive analytics"
            ]
        }
    ];

    return (
        <>
            {/* ---------------------------------------------------------------------------
               SECTION 1: INDUSTRY (Grid / Dashboard / Neutral) 
               --------------------------------------------------------------------------- */}
            <section className="py-32 bg-[#02040A] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">Strategic Applications</h2>
                        <p className="text-gray-400">Operational intelligence for high-stakes environments.</p>
                    </motion.div>

                    {/* Dense Grid Layout */}
                    <div className="grid md:grid-cols-3 bg-white/5 border border-white/10">
                        {industryCases.map((uc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`p-8 border-b md:border-b-0 border-white/10 ${idx !== 2 ? 'md:border-r' : ''} hover:bg-white/5 transition-colors duration-300 group flex flex-col items-center text-center`}
                            >
                                <div className="flex flex-col items-center space-y-3 mb-6 text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {uc.icon}
                                    <h3 className="font-bold text-gray-200 tracking-wide uppercase text-sm group-hover:text-white px-4">{uc.category}</h3>
                                </div>

                                <ul className="space-y-3 flex flex-col items-center">
                                    {uc.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-xs">
                                            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-500 transition-colors flex-shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-4 border-t border-dashed border-white/10 flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity w-full">
                                    <span className="text-[10px] font-mono text-gray-500">{uc.category.toUpperCase().replace(' ', '_')}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
               SECTION 2: ROLE (Cards / Persona / Accent) 
               --------------------------------------------------------------------------- */}
            <section className="py-32 bg-[#02040A] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">Tailored Intelligence</h2>
                        <p className="text-gray-400 mx-auto max-w-2xl">Platform configurations designed for your specific mandate.</p>
                    </motion.div>

                    {/* Spaced Card Layout */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {roleCases.map((uc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative bg-[#05070e] rounded-xl border border-white/10 p-8 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500 group overflow-hidden"
                            >

                                {/* Accent Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                {/* Header: High Contrast */}
                                <div className="relative z-10 flex flex-col items-center text-center mb-8">
                                    <div className="w-14 h-14 bg-blue-900/20 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                        {uc.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{uc.category}</h3>
                                    <div className="h-0.5 w-12 bg-blue-500/30 rounded-full mt-2 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-500"></div>
                                </div>

                                {/* List with icons */}
                                <ul className="relative z-10 space-y-4 flex flex-col items-center">
                                    {uc.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                            <span className="text-blue-500/50 mr-2">›</span>
                                            <span className="text-center">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Label (Accented) */}
                                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-mono text-blue-400/80 tracking-widest uppercase border border-blue-500/20 px-2 py-1 rounded bg-blue-500/5">
                                        {uc.category.toUpperCase().replace(' ', '_')}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
