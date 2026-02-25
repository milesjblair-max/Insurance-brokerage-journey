'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StepLayoutProps {
    currentStep: number;
    totalSteps: number;
    phaseTitle: string;
    phaseId: string;
    title: string;
    description: string;
    whatHappens: string[];
    soWhat: string[];
    logos?: string[];
    prevLink?: string;
    nextLink?: string;
}

const LOGO_LABELS: Record<string, string> = {
    '/assets/logos/agentforce.png': 'Agentforce',
    '/assets/logos/fsc.png': 'Salesforce FSC',
    '/assets/logos/datacloud.jpg': 'Data Cloud',
    '/assets/logos/salesforce.png': 'Salesforce',
    '/assets/logos/atlas.png': 'Atlas',
    '/assets/logos/accenture.png': 'Accenture',
};

const ALL_PHASES = [
    { label: 'Identify', stepStart: 1 },
    { label: 'Create', stepStart: 3 },
    { label: 'Prepare', stepStart: 5 },
    { label: 'Execute', stepStart: 7 },
];

// Helper to handle basePath for images
const getAssetPath = (path: string) => {
    const basePath = '/Insurance-brokerage-journey';
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};

const StepLayout: React.FC<StepLayoutProps> = ({
    currentStep, totalSteps, phaseTitle, title, description,
    whatHappens, soWhat, logos = [], prevLink, nextLink,
}) => {
    // determine active phase: whichever stepStart <= currentStep, take the last
    const activePhase = ALL_PHASES.reduce<string>((acc, p) => {
        if (p.stepStart <= currentStep) return p.label;
        return acc;
    }, ALL_PHASES[0].label);

    return (
        <>
            <article className="step-page">
                {/* ── Step Badge + Title ── */}
                <div className="step-header">
                    <div className="step-number-badge fade-up fade-up-1">
                        <div className="step-number-dot">{currentStep}</div>
                        <span className="t-label" style={{ color: '#a100ff' }}>
                            {phaseTitle} &nbsp;·&nbsp; Step {currentStep} of {totalSteps}
                        </span>
                    </div>

                    <h2 className="t-h2 fade-up fade-up-2" style={{ marginBottom: 16, marginTop: 0 }}>
                        {title}
                    </h2>
                    <p className="t-body fade-up fade-up-3" style={{ maxWidth: 700, marginBottom: 0 }}>
                        {description}
                    </p>
                </div>

                {/* ── Two-column content ── */}
                <div className="step-content-grid fade-up fade-up-3">
                    <div>
                        <p className="step-col-label">What Happens</p>
                        {whatHappens.map((item, i) => (
                            <div key={i} className="step-bullet">
                                <div className="step-bullet-dot accent" />
                                <span className="step-bullet-text">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="step-col-label">So What</p>
                        {soWhat.map((item, i) => (
                            <div key={i} className="step-bullet">
                                <div className="step-bullet-dot muted" />
                                <span className="step-bullet-text italic-muted">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Logo Strip ── */}
                {logos.length > 0 && (
                    <div className="fade-up fade-up-4" style={{ marginTop: 32 }}>
                        <p className="step-col-label" style={{ marginBottom: 14 }}>Platform</p>
                        <div className="logo-strip">
                            {logos.map((src, i) => (
                                <div key={i} className="logo-chip">
                                    <img
                                        src={getAssetPath(src)}
                                        alt={LOGO_LABELS[src] || 'Platform logo'}
                                        style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
                                    />
                                    <span style={{ fontSize: 12, fontWeight: 600, color: '#444', whiteSpace: 'nowrap' }}>
                                        {LOGO_LABELS[src] || ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Navigation ── */}
                <div className="step-nav fade-up fade-up-5">
                    <div className="step-nav-left">
                        {prevLink && (
                            <Link href={prevLink} className="btn-outline">
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back
                            </Link>
                        )}
                    </div>
                    <div className="step-nav-right">
                        {nextLink ? (
                            <Link href={nextLink} className="btn-primary">
                                Next Step
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                    <path d="m9 18 6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        ) : (
                            <Link href="/" className="btn-primary" style={{ background: '#18a34a' }}>
                                Journey Complete
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </article>

            {/* ── Bottom Phase Nav ── */}
            <nav className="bottom-phase-nav" aria-label="Journey phases">
                {ALL_PHASES.map((p, i) => (
                    <Link
                        key={i}
                        href={`/journey/${p.stepStart}`}
                        className={`phase-pill ${p.label === activePhase ? 'active' : ''}`}
                    >
                        {p.label}
                    </Link>
                ))}
            </nav>
        </>
    );
};

export default StepLayout;
