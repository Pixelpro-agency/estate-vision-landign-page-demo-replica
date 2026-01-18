'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Landmark } from 'lucide-react';

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30 font-sans">
            <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">Back to Home</span>
                    </Link>
                    <div className="text-sm font-bold tracking-tighter uppercase">Legal // Terms</div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <div className="flex items-center space-x-4 mb-12">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                        <Landmark className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-2">System Protocol Version: 2.4.0</p>
                    </div>
                </div>

                <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">1. Acceptance of Terms</h2>
                        <p>
                            By accessing the EstateVision platform, you agree to comply with these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">2. Restrictive License</h2>
                        <p className="mb-4">
                            Access is granted solely for professional intelligence and risk assessment purposes. You may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>Modify or copy source material or 3D assets</li>
                            <li>Use material for unauthorized commercial purposes</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
                            <li>Remove any copyright or proprietary notations from the intelligence layers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">3. Disclaimer</h2>
                        <p>
                            The intelligence provided by EstateVision is based on predictive models and historical data. While we strive for extreme accuracy, insights are oracular in nature and should be used as one of many factors in human decision-making processes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">4. Govering Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with international corporate laws, and you irrevocably submit to the exclusive jurisdiction of the state or location designated by EstateVision Group.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-600">
                            System Authorization Required // Access Code: 0x99212
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
