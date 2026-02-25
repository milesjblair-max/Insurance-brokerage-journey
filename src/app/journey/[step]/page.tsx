import { getStoryboardData, getAllSteps } from '@/lib/storyboard';
import Header from '@/components/Header';
import StepLayout from '@/components/StepLayout';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

const PHASE_NAV = [
    { id: 'discover', title: 'Discover', href: '/journey/1' },
    { id: 'onboard', title: 'Onboard', href: '/journey/2' },
    { id: 'prepare', title: 'Prepare', href: '/journey/3' },
    { id: 'advise', title: 'Advise', href: '/journey/4' },
    { id: 'execute', title: 'Execute', href: '/journey/5' },
];

export function generateStaticParams() {
    const data = getStoryboardData();
    const allSteps = getAllSteps(data);
    return allSteps.map((_, i) => ({ step: (i + 1).toString() }));
}

interface PageProps {
    params: Promise<{ step: string }>;
}

export default async function StepPage({ params }: PageProps) {
    const { step: stepParam } = await params;
    const data = getStoryboardData();
    const allSteps = getAllSteps(data);
    const idx = parseInt(stepParam) - 1;

    if (isNaN(idx) || idx < 0 || idx >= allSteps.length) {
        notFound();
    }

    const s = allSteps[idx];
    const total = allSteps.length;
    const prevLink = idx > 0 ? `/journey/${idx}` : '/journey';
    const nextLink = idx < total - 1 ? `/journey/${idx + 2}` : undefined;

    // Mark active phase in nav
    const phasesWithActive = PHASE_NAV.map(p => ({
        ...p,
        active: p.id === s.phaseId.replace('phase-', (() => {
            const map: Record<string, string> = {
                'phase-1': 'discover',
                'phase-2': 'onboard',
                'phase-3': 'prepare',
                'phase-4': 'execute',
            };
            return map[s.phaseId] || '';
        })()),
    }));

    return (
        <div className="journey-page" style={{ paddingBottom: 60 }}>
            <Header
                theme="light"
                stepLabel={`Step ${idx + 1} of ${total}`}
                phases={phasesWithActive}
            />
            <StepLayout
                currentStep={idx + 1}
                totalSteps={total}
                phaseTitle={s.phaseTitle}
                phaseId={s.phaseId}
                title={s.title}
                description={s.summary}
                whatHappens={s.whatHappens}
                soWhat={s.soWhat}
                logos={s.logos}
                prevLink={prevLink}
                nextLink={nextLink}
            />
            <Footer theme="light" />
        </div>
    );
}
