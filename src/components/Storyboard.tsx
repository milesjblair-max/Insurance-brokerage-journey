"use client";

import React, { useState } from 'react';
import { Phase, Step } from '@/lib/types';

interface Props {
    phases: Phase[];
}

const Storyboard: React.FC<Props> = ({ phases }) => {
    const [showHuman, setShowHuman] = useState(true);
    const [showSystems, setShowSystems] = useState(true);
    const [activeTab, setActiveTab] = useState(phases[0]?.id);

    const activePhase = phases.find(p => p.id === activeTab);

    return (
        <section id="storyboard" className="py-24 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold mb-4">Agentic AI Journey</h2>
                        <p className="text-white/40">
                            Explore the end-to-end placement lifecycle orchestrated by AI agents.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setShowHuman(!showHuman)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${showHuman ? 'bg-accent/20 border-accent text-accent' : 'bg-transparent border-white/10 text-white/40'
                                }`}
                        >
                            Human-in-the-loop
                        </button>
                        <button
                            onClick={() => setShowSystems(!showSystems)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${showSystems ? 'bg-accent/20 border-accent text-accent' : 'bg-transparent border-white/10 text-white/40'
                                }`}
                        >
                            Systems
                        </button>
                    </div>
                </div>

                {/* Phase Tabs */}
                <div className="flex overflow-x-auto pb-4 gap-8 mb-8 border-b border-white/5 no-scrollbar">
                    {phases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActiveTab(phase.id)}
                            className={`whitespace-nowrap pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === phase.id ? 'text-white' : 'text-white/30 hover:text-white/60'
                                }`}
                        >
                            {phase.title}
                            {activeTab === phase.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Phase Summary */}
                {activePhase?.summary && (
                    <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                        <p className="text-accent/70 text-lg max-w-3xl leading-relaxed font-medium italic border-l-2 border-accent/30 pl-6">
                            {activePhase.summary}
                        </p>
                    </div>
                )}

                {/* Steps Grid */}
                <div className="grid gap-12">
                    {activePhase?.steps.map((step, index) => (
                        <div key={step.id} className="relative pl-12 border-l border-accent/20 pb-12 last:pb-0">
                            {/* Step Number Dot */}
                            <div className="absolute left-[-21px] top-0 w-10 h-10 bg-black border-2 border-accent rounded-full flex items-center justify-center font-bold text-sm text-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]">
                                {(index + 1 + phases.filter((_, i) => i < phases.findIndex(p => p.id === activeTab)).reduce((acc, curr) => acc + curr.steps.length, 0)).toString().padStart(2, '0')}
                            </div>

                            <div className="grid lg:grid-cols-12 gap-12">
                                <div className="lg:col-span-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {step.tags && step.tags.map(tag => (
                                            <span key={tag} className="text-[9px] uppercase tracking-wider bg-accent/10 text-accent/80 px-2 py-0.5 rounded border border-accent/20 font-bold">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        {step.summary}
                                    </p>

                                    {step.artifacts && step.artifacts.length > 0 && (
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Artifacts Generated</span>
                                            {step.artifacts.map((art, i) => (
                                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-mono text-white/70 italic relative overflow-hidden group">
                                                    <div className="absolute left-0 top-0 w-1 h-full bg-accent/20 group-hover:bg-accent transition-colors" />
                                                    <div className="text-[10px] uppercase mb-1 opacity-50 font-bold tracking-tighter">{art.type}</div>
                                                    "{art.text}"
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                                    {/* Agent Actions */}
                                    <div className="glass-card rounded-2xl p-6 border-accent/10">
                                        <div className="flex items-center gap-2 mb-4 text-accent">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                            </svg>
                                            <h4 className="font-bold text-sm uppercase tracking-wider">Agent Actions</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {step.agentActions.map((action, i) => (
                                                <li key={i} className="text-sm text-white/70 flex gap-3">
                                                    <span className="text-accent/60 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mt-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                        </svg>
                                                    </span>
                                                    {action}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Human Oversight */}
                                    {showHuman && (
                                        <div className="glass-card rounded-2xl p-6 border-white/5 animate-in fade-in zoom-in-95 duration-300">
                                            <div className="flex items-center gap-2 mb-4 text-white/40">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                <h4 className="font-bold text-sm uppercase tracking-wider">Human Gate</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {step.humanOversight.map((action, i) => (
                                                    <li key={i} className="text-sm text-white/40 flex gap-3 italic">
                                                        <span className="text-white/20 mt-1 flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                                            </svg>
                                                        </span>
                                                        {action}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Systems */}
                                    {showSystems && (
                                        <div className="md:col-span-2 glass-card rounded-xl p-4 flex flex-wrap gap-4 items-center animate-in fade-in slide-in-from-left-4 duration-300">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mr-2 flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                </svg>
                                                Systems:
                                            </span>
                                            {step.systems.map((system) => (
                                                <span key={system} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/60 hover:border-accent/40 transition-colors pointer-events-none">
                                                    {system}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                                        <div className="text-[11px] bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                            <span className="block text-white/30 uppercase tracking-[0.2em] mb-2 font-bold">Data Inflow</span>
                                            <div className="flex flex-wrap gap-2">
                                                {step.dataIn.map(d => <span key={d} className="text-accent/80 font-medium px-2 py-0.5 bg-accent/5 rounded">{d}</span>)}
                                            </div>
                                        </div>
                                        <div className="text-[11px] bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                            <span className="block text-white/30 uppercase tracking-[0.2em] mb-2 font-bold">Data Outflow</span>
                                            <div className="flex flex-wrap gap-2">
                                                {step.dataOut.map(d => <span key={d} className="text-white/60 font-medium px-2 py-0.5 bg-white/5 rounded">{d}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Storyboard;
