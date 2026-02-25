import React from 'react';
import Link from 'next/link';

const bullets = [
    'Unified Client 360 — Atlas Global Enterprise',
    'Intelligent Opportunity Scoring & Prioritization',
    'Autonomous Account & Opportunity Orchestration',
    'AI-Driven Market Quote Analysis & Ranking',
];

const JourneyIntro: React.FC = () => (
    <div className="journey-intro">
        <p className="t-label fade-up fade-up-1" style={{ color: '#a100ff', marginBottom: 16 }}>
            Salesforce FSC &nbsp;·&nbsp; Data Cloud &nbsp;·&nbsp; Agentforce
        </p>
        <h2 className="t-h2 fade-up fade-up-2" style={{ marginBottom: 16 }}>
            Global Insurance Programme<br />
            <span style={{ color: '#a100ff' }}>Agentic AI Journey</span>
        </h2>
        <p className="t-body fade-up fade-up-3" style={{ maxWidth: 540, marginBottom: 0 }}>
            A step-by-step walkthrough of how a multinational commercial risk programme moves from initial contact through to bound placement — orchestrated by AI, governed by humans.
        </p>

        <ul className="journey-intro-bullets fade-up fade-up-4">
            {bullets.map((b, i) => (
                <li key={i} className="journey-intro-bullet" style={{ listStyle: 'none' }}>
                    <span style={{
                        width: 22, height: 22, borderRadius: '50%', background: 'rgba(161,0,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" stroke="#a100ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    {b}
                </li>
            ))}
        </ul>

        <div className="fade-up fade-up-5">
            <Link href="/journey/1" className="btn-primary">
                Start Journey
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    </div>
);

export default JourneyIntro;
