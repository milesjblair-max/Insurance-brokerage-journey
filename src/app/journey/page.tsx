import Header from '@/components/Header';
import JourneyIntro from '@/components/JourneyIntro';
import Footer from '@/components/Footer';

export default function JourneyLanding() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Header theme="light" />
            <JourneyIntro />
            <Footer theme="light" />
        </main>
    );
}
