'use client';
import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import EVMapExactReplica from './EVMapExactReplica';
import EVMapOverlayUI from './EVMapOverlayUI';

export default function InterfacePreview() {
    return (
        <section className="py-32 bg-[#02040A] relative overflow-hidden border-t border-white/5">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 text-center mb-12"
            >
                <div className="inline-flex items-center text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 border border-blue-500/30 px-3 py-1 rounded bg-blue-500/5">
                    <Terminal className="w-3 h-3 mr-2" /> EstateVision OS v2.4
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
                    Unified Risk Operating System
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Ingest signals from any domain. Predict threats in real-time. Coordinate response from a single pane of glass.
                </p>
            </motion.div>

            {/* Dashboard Container - Fullwidth MapLibre Preview */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-[1700px] mx-auto px-4"
            >
                <div className="relative bg-[#111111] border border-gray-800 rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[700px]">
                    {/* MapLibre Preview (static replica) */}
                    <EVMapExactReplica />

                    {/* Overlay UI (logo, navbar, search, icons) */}
                    <EVMapOverlayUI />
                </div>
            </motion.div>
        </section>
    );
}
