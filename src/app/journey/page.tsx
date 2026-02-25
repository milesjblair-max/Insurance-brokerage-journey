import Header from '@/components/Header';
import JourneyIntro from '@/components/JourneyIntro';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Journey Overview | Agentic Insurance Broking',
    description: 'Explore the agentic AI journey for global insurance broking.',
};

const phases = [
    { id: 'identify', title: 'Identify', href: '/journey/1' },
    { id: 'create', title: 'Create', href: '/journey/3' },
    { id: 'prepare', title: 'Prepare', href: '/journey/5' },
    { id: 'execute', title: 'Execute', href: '/journey/7' },
];

export default function JourneyLanding() {
    return (
        <div className="journey-page">
            <Header theme="light" phases={phases} />
            <JourneyIntro />
            <Footer theme="light" />
        </div>
    );
}
