import Header from '@/components/Header';
import HeroDark from '@/components/HeroDark';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Header theme="dark" />
      <div className="flex-grow flex flex-col">
        <HeroDark />
      </div>
      <Footer theme="dark" />
    </main>
  );
}
