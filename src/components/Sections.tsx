import React from 'react';
import { Capability, Architecture as ArchType, Governance as GovType } from '@/lib/types';

export const Capabilities: React.FC<{ title: string, items: Capability[] }> = ({ title, items }) => (
    <section id="capabilities" className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
                <p className="text-white/40">Enterprise-grade AI solutions tailored for the insurance lifecycle.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((cap, i) => (
                    <div key={i} className="glass-card rounded-2xl p-8 border border-white/5 hover:border-accent/40 transition-colors group">
                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{cap.title}</h3>
                        <ul className="space-y-2">
                            {cap.bullets.map((bullet, j) => (
                                <li key={j} className="text-sm text-white/50 flex gap-2">
                                    <span className="text-accent">•</span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Architecture: React.FC<{ title: string, layers: ArchType['layers'] }> = ({ title, layers }) => (
    <section id="architecture" className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
                <p className="text-white/40 max-w-2xl mx-auto">A modular, secure, and integrated stack designed for multi-agent orchestration across legacy and modern systems.</p>
            </div>

            <div className="space-y-4">
                {layers.map((layer, i) => (
                    <div key={i} className="relative">
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-accent/30 rounded-full" />
                        <div className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-64 flex-shrink-0">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">Layer {layers.length - i}</span>
                                <h3 className="font-bold text-lg">{layer.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {layer.items.map((item, j) => (
                                    <div key={j} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/80">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Governance: React.FC<{ governance: GovType }> = ({ governance }) => (
    <section id="governance" className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">{governance.title}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        Our agentic systems operate within strict guardrails, ensuring that every automated decision is auditable, safe, and governed by industry experts.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {governance.bullets.map((bullet, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-white/50 pt-2">{bullet}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-12 border-accent/20 bg-accent/[0.02]">
                    <div className="text-center">
                        <div className="inline-block p-4 rounded-full bg-accent/20 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Contract Certainty</h3>
                        <p className="text-white/40 mb-8 max-w-sm mx-auto">
                            AI agents identify discrepancies but only human experts execute the final bind authority.
                        </p>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-full animate-pulse" />
                        </div>
                        <div className="mt-4 text-[10px] uppercase font-bold tracking-widest text-accent">Continuous Compliance Monitoring</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
