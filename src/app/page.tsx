import Header from '@/components/Header';
import HeroDark from '@/components/HeroDark';
import Footer from '@/components/Footer';
import { getStoryboardData } from '@/lib/storyboard';

export const metadata = {
  title: 'Aurelius Global Industries | Agentic Insurance Storyboard',
  description: 'Executive storytelling journey demonstrating how agentic AI transforms global insurance broking with governed human oversight.',
};

export default function Home() {
  const data = getStoryboardData();

  return (
    <div className="cover-page" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header theme="dark" />
      <div style={{ flex: 1 }}>
        <HeroDark
          personas={data.personas}
          metrics={data.metrics}
        />
      </div>
      <Footer theme="dark" />
    </div>
  );
}
