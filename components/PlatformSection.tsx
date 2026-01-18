'use client';
import React from 'react';
import { Database, Activity, Map, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
    {
        title: "Ingest & Normalize",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        description: "Unify thousands of fragmented data sources into a single ontology. From satellite imagery to IoT sensors, we create a cohesive digital twin.",
        metric: "10k+ Sources"
    },
    {
        title: "Risk Forecasting",
        icon: <Activity className="w-6 h-6 text-teal-400" />,
        description: "Predictive models anticipate disruption before it occurs. Advanced scenario analysis for grid failure, civil unrest, and climate impact.",
        metric: "94% Accuracy"
    },
    {
        title: "Physical Mapping",
        icon: <Map className="w-6 h-6 text-purple-400" />,
        description: "Geospatial intelligence mapped to critical assets. Visualize supply chain dependencies and infrastructure choke points in real-time.",
        metric: "Sub-meter Precision"
    },
    {
        title: "Incident Timeline",
        icon: <Clock className="w-6 h-6 text-amber-400" />,
        description: "Reconstruct events with millisecond precision. Audit trails and forensic replay capabilities for post-incident analysis.",
        metric: "Real-time Sync"
    }
];

export default function PlatformSection() {
    return (
        <section className="py-32 bg-[#02040A] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Core Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        COMPLETE SITUATIONAL AWARENESS
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.5)' }}
                            className="group relative bg-white/5 border border-white/10 p-6 rounded-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-2 bg-black/50 border border-white/10 rounded mb-4">
                                    {card.icon}
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>

                                <div className="mb-4">
                                    <span className="text-[10px] font-mono text-gray-400 border border-white/5 px-2 py-1 rounded bg-black/30">
                                        {card.metric}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

