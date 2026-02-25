import React from 'react';
import Link from 'next/link';
import { Persona, MetricData } from '@/lib/types';

interface HeroDarkProps {
    personas: Persona[];
    metrics: MetricData;
}

// Helper to handle basePath for images
const getAssetPath = (path: string) => {
    const basePath = '/Insurance-brokerage-journey';
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};

const HeroDark: React.FC<HeroDarkProps> = ({ personas, metrics }) => (
    <main className="cover-page" style={{ background: '#0F0F12' }}>
        {/* ambient glow */}
        <div className="cover-glow" aria-hidden="true" />

        {/* ── Hero ── */}
        <section className="cover-hero" style={{ paddingBottom: '40px' }}>
            <p className="t-label fade-up fade-up-1" style={{ color: 'rgba(161,0,255,0.85)', marginBottom: 20 }}>
                Agentic AI &nbsp;·&nbsp; Global Insurance Broking
            </p>

            <h1 className="t-hero fade-up fade-up-2" style={{ marginBottom: 20 }}>
                From First Contact to Bound Risk —<br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>in One Intelligent Conversation</span>
            </h1>

            <p className="t-body-dark fade-up fade-up-3" style={{ maxWidth: 640, marginBottom: 0 }}>
                This interactive journey demonstrates how agentic AI transforms global insurance broking — connecting client engagement, broking intelligence, and execution workflows into one orchestrated experience.
            </p>
        </section>

        {/* ── Persona Cards ── */}
        <div className="cover-personas fade-up fade-up-4" style={{ marginBottom: '40px' }}>
            {personas.map(p => {
                const isLogo = p.name.toLowerCase().includes('atlas') || p.avatar.includes('atlas');
                return (
                    <div key={p.id} className="persona-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                            <div className="persona-avatar-wrap">
                                <img
                                    src={getAssetPath(p.avatar)}
                                    alt={p.name}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: isLogo ? 'contain' : 'cover',
                                        padding: isLogo ? '8px' : '0',
                                        borderRadius: isLogo ? '0' : '50%'
                                    }}
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

        {/* ── Metrics Row ── */}
        <div className="fade-up fade-up-5" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
            <div className="metrics-grid">
                <div className="metric-item">
                    <span className="metric-num">{metrics.steps.split(' ')[0]}</span>
                    <span className="metric-label">STEPS</span>
                </div>
                <div className="metric-item">
                    <span className="metric-num">{metrics.phases.split(' ')[0]}</span>
                    <span className="metric-label">PHASES</span>
                </div>
                <div className="metric-item">
                    <div>
                        <span className="metric-num" style={{ fontSize: '42px' }}>$75M+</span>
                        <div className="metric-text">Program Placement</div>
                    </div>
                    <span className="metric-label">PROGRAM</span>
                </div>
                <div className="metric-item">
                    <div>
                        <span className="metric-num" style={{ fontSize: '42px' }}>&lt; 15 min</span>
                        <div className="metric-text">Broker Prep Time</div>
                    </div>
                    <span className="metric-label">BROKER PREP</span>
                </div>
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
