'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 bg-[#02040A] border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase">
                        Operational Intelligence starts here.
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link href="/request-access" className="w-full sm:w-auto">
                            <button className="px-8 py-4 bg-white text-black font-bold tracking-wide uppercase hover:bg-gray-200 transition-colors w-full">
                                Request Access
                            </button>
                        </Link>
                        <button className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-mono uppercase tracking-wide transition-colors flex items-center w-full sm:w-auto justify-center">
                            Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    <p className="mt-12 text-gray-500 text-sm font-mono uppercase tracking-[0.2em] opacity-50">
                        RESTRICTED ACCESS // VETTED ORGANIZATIONS ONLY
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
