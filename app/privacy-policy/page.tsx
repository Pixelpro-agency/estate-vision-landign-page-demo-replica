'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30 font-sans">
            <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">Back to Home</span>
                    </Link>
                    <div className="text-sm font-bold tracking-tighter uppercase">Legal // Privacy</div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <div className="flex items-center space-x-4 mb-12">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                        <Shield className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-2">Last Updated: January 2024</p>
                    </div>
                </div>

                <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">1. Information We Collect</h2>
                        <p className="mb-4">
                            EstateVision collects information necessary to provide asset intelligence and security services. This includes corporate contact details provided during the "Request Access" application process.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>Name and corporate identity</li>
                            <li>Corporate email address</li>
                            <li>Organization name and professional role</li>
                            <li>Network identifiers (IP addresses) for security auditing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">2. How We Use Information</h2>
                        <p>
                            Collected data is used strictly for vetting access requests, providing technical support, and maintaining the integrity of our predictive intelligence layer. We do not sell or monetize organizational data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">3. Data Security Protocol</h2>
                        <p>
                            We implement enterprise-grade encryption (AES-256) and strict access controls to protect sensitive infrastructure data. Security audits are performed regularly to ensure compliance with global safety standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">4. Third-Party Integration</h2>
                        <p>
                            For specific features like infrastructure mapping and communication, we may use trusted sub-processors. These entities are bound by confidentiality agreements that match or exceed our internal standards.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-600">
                            EstateVision Intelligence Group // Restricted Protocol 882-Alpha
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
