import React from 'react';

interface Props {
    title: string;
    subtitle: string;
}

const Hero: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <section id="overview" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                        <span className="gradient-text">{title}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10">
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#storyboard"
                            className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/80 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                        >
                            Explore the Journey
                        </a>
                        <a
                            href="#capabilities"
                            className="px-8 py-4 border border-white/10 hover:border-white/20 rounded-full font-semibold transition-all hover:bg-white/5"
                        >
                            View Capabilities
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block">
                    {/* Abstract AI/Agent Visual */}
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl rotate-6 animate-pulse" />
                        <div className="absolute inset-0 glass-card rounded-3xl -rotate-3 p-8 flex items-center justify-center border-white/5">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-accent/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Agentic Intelligence</h3>
                                <p className="text-white/40">Multi-agent placement orchestration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
