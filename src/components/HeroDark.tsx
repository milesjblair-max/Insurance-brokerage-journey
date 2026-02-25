import React from 'react';
import Link from 'next/link';

const HeroDark: React.FC = () => {
    return (
        <section className="dark-cover px-6 text-center">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_50%)]" />

            <div className="relative z-10 max-w-4xl mx-auto fade-in">
                {/* Centered Business Logo Placeholder */}
                <div className="mb-16 flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-black tracking-[0.2em] italic text-white/90">HOWDEN</div>
                        <div className="text-[10px] tracking-[0.5em] text-purple-400 font-bold mt-2 uppercase">Orchestration Engine</div>
                    </div>
                </div>

                <div className="mb-12 opacity-80">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" />
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-purple-400">Agentic AI for Insurance Broking</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                    From Enquiry to Bind — In a Single <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Orchestrated Journey</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Unifying client onboarding, placement, and servicing with governed AI and expert human oversight.
                </p>

                <Link href="/journey" className="btn-primary inline-block">
                    Explore Journey
                </Link>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
        </section>
    );
};

export default HeroDark;
