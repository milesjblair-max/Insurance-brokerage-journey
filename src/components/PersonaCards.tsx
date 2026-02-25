import React from 'react';
import Image from 'next/image';
import { Persona } from '@/lib/types';

interface Props {
    personas: Persona[];
}

const PersonaCards: React.FC<Props> = ({ personas }) => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Ecosystem</h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        Agentic AI transforms the experience for both clients and brokers, handling the complexity of the placement while keeping experts in control.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {personas.map((persona) => (
                        <div key={persona.id} className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-24 h-24 rounded-2xl bg-accent/20 flex-shrink-0 relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/10 flex items-center justify-center text-4xl font-bold text-accent">
                                    {persona.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                {/* Image placeholder - normally we'd use persona.avatar */}
                                {/* <Image 
                  src={persona.avatar} 
                  alt={persona.name} 
                  width={96} 
                  height={96} 
                  className="object-cover relative z-10"
                /> */}
                            </div>
                            <div>
                                <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-bold uppercase tracking-wider mb-3">
                                    {persona.role}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{persona.name}</h3>
                                <ul className="space-y-3">
                                    {persona.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                            <span className="text-accent mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9.001-9.001" />
                                                </svg>
                                            </span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonaCards;
