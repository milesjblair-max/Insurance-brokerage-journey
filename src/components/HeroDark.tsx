import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const personas = [
    {
        id: 'client',
        name: 'Aurelius Global Industries',
        role: 'Global Multinational Enterprise',
        avatar: '/aurelius logo.png',
        isLogo: true,
        description:
            'Aurelius Global Industries operates across 32 countries with complex commercial risk exposure spanning marine, cyber, property, and specialty liability lines.',
    },
    {
        id: 'broker',
        name: 'Mark Thurman',
        role: 'Lead Broker — Global Accounts',
        avatar: '/Mark Thurman.jpg',
        isLogo: false,
        description:
            'Senior specialty broker responsible for structuring multinational programs and coordinating cross-border placements.',
    },
];

const metrics = [
    { value: '12', label: 'Orchestrated Steps' },
    { value: '4', label: 'Journey Phases' },
    { value: '$75M+', label: 'Program Placement' },
    { value: '< 15 min', label: 'Broker Prep Time' },
];

const HeroDark: React.FC = () => (
    <main className="cover-page">
        {/* ambient glow */}
        <div className="cover-glow" aria-hidden="true" />

        {/* ── Hero ── */}
        <section className="cover-hero">
            <p className="t-label fade-up fade-up-1" style={{ color: 'rgba(161,0,255,0.85)', marginBottom: 24 }}>
                Agentic AI &nbsp;·&nbsp; Global Insurance Broking
            </p>

            <h1 className="t-hero fade-up fade-up-2" style={{ marginBottom: 24 }}>
                From First Contact to Bound Risk —<br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>in One Intelligent Conversation</span>
            </h1>

            <p className="t-body-dark fade-up fade-up-3" style={{ maxWidth: 640, marginBottom: 0 }}>
                This interactive journey demonstrates how agentic AI transforms global insurance broking — connecting client engagement, broking intelligence, and execution workflows into one orchestrated experience.
            </p>
        </section>

        {/* ── Persona Cards ── */}
        <div className="cover-personas fade-up fade-up-4">
            {personas.map(p => (
                <div key={p.id} className="persona-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                        <div className="persona-avatar-wrap">
                            <Image
                                src={p.avatar}
                                alt={p.name}
                                width={60}
                                height={60}
                                style={{ objectFit: p.isLogo ? 'contain' : 'cover', padding: p.isLogo ? 6 : 0 }}
                                unoptimized
                            />
                        </div>
                        <div>
                            <p className="t-label" style={{ color: 'rgba(161,0,255,0.8)', marginBottom: 4 }}>
                                {p.role}
                            </p>
                            <h3 className="t-h3" style={{ margin: 0 }}>{p.name}</h3>
                        </div>
                    </div>
                    <p className="t-body-dark" style={{ fontSize: 15, margin: 0 }}>{p.description}</p>
                </div>
            ))}
        </div>

        {/* ── Metrics ── */}
        <div className="metrics-row fade-up fade-up-5" style={{ margin: '32px auto 0' }}>
            {metrics.map(m => (
                <div key={m.label} className="metric-cell">
                    <span className="t-h2" style={{ color: '#fff', letterSpacing: '-0.03em' }}>{m.value}</span>
                    <span className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>{m.label}</span>
                </div>
            ))}
        </div>

        {/* ── CTA ── */}
        <div className="cover-cta">
            <Link href="/journey" className="btn-primary">
                Explore Journey
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
        </div>
    </main>
);

export default HeroDark;
