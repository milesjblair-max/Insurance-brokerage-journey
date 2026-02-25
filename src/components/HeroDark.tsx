import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Persona, MetricData } from '@/lib/types';

interface HeroDarkProps {
    personas: Persona[];
    metrics: MetricData;
}

const HeroDark: React.FC<HeroDarkProps> = ({ personas, metrics }) => (
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
            {personas.map(p => {
                const isLogo = p.avatar.includes('aurelius');
                return (
                    <div key={p.id} className="persona-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                            <div className="persona-avatar-wrap">
                                <Image
                                    src={p.avatar}
                                    alt={p.name}
                                    width={60}
                                    height={60}
                                    style={{ objectFit: isLogo ? 'contain' : 'cover', padding: isLogo ? 6 : 0 }}
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
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                            {p.bullets.map((b, i) => (
                                <li key={i} className="t-body-dark" style={{ fontSize: 14, marginBottom: 4, display: 'flex', gap: 8 }}>
                                    <span style={{ color: 'var(--accent)' }}>•</span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>

        {/* ── Metrics ── */}
        <div className="metrics-row fade-up fade-up-5" style={{ margin: '32px auto 0' }}>
            <div className="metric-cell">
                <span className="t-h2" style={{ color: '#fff', letterSpacing: '-0.03em' }}>{metrics.steps.split(' ')[0]}</span>
                <span className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Steps</span>
            </div>
            <div className="metric-cell">
                <span className="t-h2" style={{ color: '#fff', letterSpacing: '-0.03em' }}>{metrics.phases.split(' ')[0]}</span>
                <span className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Phases</span>
            </div>
            <div className="metric-cell">
                <span className="t-h2" style={{ color: '#fff', letterSpacing: '-0.03em' }}>{metrics.placement}</span>
                <span className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Program</span>
            </div>
            <div className="metric-cell">
                <span className="t-h2" style={{ color: '#fff', letterSpacing: '-0.03em' }}>{metrics.prep}</span>
                <span className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Broker Prep</span>
            </div>
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
