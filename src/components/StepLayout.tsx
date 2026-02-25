import React from 'react';
import Link from 'next/link';

interface StepLayoutProps {
    currentStep: number;
    totalSteps: number;
    title: string;
    description: string;
    whatHappens: string[];
    soWhat: string[];
    prevLink?: string;
    nextLink?: string;
}

const StepLayout: React.FC<StepLayoutProps> = ({
    currentStep,
    totalSteps,
    title,
    description,
    whatHappens,
    soWhat,
    prevLink,
    nextLink
}) => {
    return (
        <section className="white-journey flex-grow py-12 md:py-20 px-6">
            <div className="max-w-[1100px] mx-auto fade-in">
                {/* Step Content */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-6 tracking-widest uppercase">
                        Step {currentStep} of {totalSteps}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-4xl">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20 border-t border-black/5 pt-12">
                    {/* What Happens */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-8">What Happens</h3>
                        <ul className="space-y-6">
                            {whatHappens.map((item, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    <span className="text-lg text-black/80 font-medium leading-normal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* So What */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-8">So What</h3>
                        <ul className="space-y-6">
                            {soWhat.map((item, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/10 mt-2.5 flex-shrink-0 group-hover:bg-purple-600 transition-colors" />
                                    <span className="text-lg text-black/60 font-medium leading-normal italic">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-12 border-t border-black/5">
                    {nextLink ? (
                        <Link href={nextLink} className="btn-primary flex items-center justify-center gap-2">
                            Next Stage
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    ) : (
                        <Link href="/" className="btn-primary flex items-center justify-center gap-2">
                            Full Cycle Complete
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </Link>
                    )}

                    {prevLink && (
                        <Link href={prevLink} className="btn-outline flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            Back
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StepLayout;
