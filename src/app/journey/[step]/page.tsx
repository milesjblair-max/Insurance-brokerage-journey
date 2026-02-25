import { getStoryboardData } from '@/lib/storyboard';
import Header from '@/components/Header';
import StepLayout from '@/components/StepLayout';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    const data = getStoryboardData();
    const allSteps = data.phases.flatMap(p => p.steps);

    return allSteps.map((_, index) => ({
        step: (index + 1).toString(),
    }));
}

interface PageProps {
    params: Promise<{ step: string }>;
}

export default async function StepPage({ params }: PageProps) {
    const { step: stepParam } = await params;
    const data = getStoryboardData();
    const allSteps = data.phases.flatMap(p => p.steps);
    const stepIndex = parseInt(stepParam) - 1;

    if (isNaN(stepIndex) || stepIndex < 0 || stepIndex >= allSteps.length) {
        notFound();
    }

    const stepData = allSteps[stepIndex];
    const totalSteps = allSteps.length;

    const prevLink = stepIndex > 0 ? `/journey/${stepIndex}` : '/journey';
    const nextLink = stepIndex < totalSteps - 1 ? `/journey/${stepIndex + 2}` : undefined;

    // Map existing data to "What Happens" and "So What"
    const whatHappens = [...stepData.agentActions, ...stepData.humanOversight].slice(0, 4);
    const soWhat = stepData.dataOut.slice(0, 4);

    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Header
                theme="light"
                showProgress
                currentStep={stepIndex + 1}
                totalSteps={totalSteps}
            />

            <StepLayout
                currentStep={stepIndex + 1}
                totalSteps={totalSteps}
                title={stepData.title}
                description={stepData.summary}
                whatHappens={whatHappens}
                soWhat={soWhat}
                prevLink={prevLink}
                nextLink={nextLink}
            />

            <Footer theme="light" />
        </main>
    );
}
