import Header from '@/components/Header';
import HeroDark from '@/components/HeroDark';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Agentic AI for Insurance Broking | Accenture',
  description:
    'See how agentic AI transforms global insurance broking — from first contact to bound risk in one intelligent conversation.',
};

export default function Home() {
  return (
    <div className="cover-page" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header theme="dark" />
      <div style={{ flex: 1 }}>
        <HeroDark />
      </div>
      <Footer theme="dark" />
    </div>
  );
}
