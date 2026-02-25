'use client';
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    theme: 'dark' | 'light';
    stepLabel?: string; // e.g. "Step 4 of 5"
    phases?: { id: string; title: string; href: string; active?: boolean }[];
}

const AccentureLogo: React.FC<{ dark?: boolean }> = ({ dark }) => (
    <span className="accenture-wordmark" style={{ color: dark ? '#fff' : '#0a0a0a' }}>
        accenture
        <span className="accenture-wordmark-dot" />
    </span>
);

const Header: React.FC<HeaderProps> = ({ theme, stepLabel, phases }) => {
    const isDark = theme === 'dark';

    if (isDark) {
        return (
            <header className="cover-header">
                <div className="cover-header-left">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <AccentureLogo dark />
                    </Link>
                    <div className="cover-header-divider" />
                    <span className="t-label" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Agentic AI&nbsp;&nbsp;|&nbsp;&nbsp;Insurance Broking
                    </span>
                </div>
                <Link href="/journey" className="btn-primary" style={{ padding: '10px 26px', fontSize: '11px' }}>
                    Explore Journey
                </Link>
            </header>
        );
    }

    return (
        <header className="journey-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <AccentureLogo />
                </Link>
                {stepLabel && (
                    <>
                        <div style={{ width: 1, height: 28, background: '#e0e0e0' }} />
                        <span className="t-label" style={{ color: '#999' }}>{stepLabel}</span>
                    </>
                )}
            </div>

            <div className="journey-header-center">
                <span>Agentic Insurance Broking</span>
            </div>

            <nav className="journey-nav-phases" aria-label="Journey phases">
                {(phases || []).map(p => (
                    <Link
                        key={p.id}
                        href={p.href}
                        className={`phase-pill ${p.active ? 'active' : ''}`}
                    >
                        {p.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
