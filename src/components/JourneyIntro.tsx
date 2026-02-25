import React from 'react';
import Link from 'next/link';

const JourneyIntro: React.FC = () => {
    return (
        <section className="white-journey flex-grow flex items-center justify-center py-20 px-6">
            <div className="max-w-4xl w-full text-center fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black leading-tight">
                    Global Insurance Programme <br />
                    <span className="text-purple-600">— Agentic AI Journey</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto text-left">
                    {[
                        "Unified Client 360",
                        "Intelligent Placement Orchestration",
                        "AI Meeting Preparation",
                        "Voice-Driven CRM Updates"
                    ].map((bullet, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-purple-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-black/70">{bullet}</span>
                        </div>
                    ))}
                </div>

                <Link href="/journey/1" className="btn-primary inline-block">
                    Start Journey
                </Link>
            </div>
        </section>
    );
};

export default JourneyIntro;
