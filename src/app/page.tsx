import { getStoryboardData } from '@/lib/storyboard';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KPIStrip from '@/components/KPIStrip';
import PersonaCards from '@/components/PersonaCards';
import Storyboard from '@/components/Storyboard';
import { Capabilities, Architecture, Governance } from '@/components/Sections';

export default function Home() {
  const data = getStoryboardData();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
      <Navbar brandName={data.brand.name} tagline={data.brand.tagline} />

      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      <KPIStrip kpis={data.kpis} />

      <PersonaCards personas={data.personas} />

      <Storyboard phases={data.phases} />

      <Capabilities
        title={data.sections.capabilities.title}
        items={data.sections.capabilities.items}
      />

      <Architecture
        title={data.sections.architecture.title}
        layers={data.sections.architecture.layers}
      />

      <Governance governance={data.sections.governance} />

      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-bold tracking-tighter uppercase">{data.brand.name}</span>
            <span className="text-[10px] tracking-[0.2em] text-accent font-semibold">{data.brand.tagline}</span>
          </div>

          <div className="text-white/20 text-[10px] uppercase font-bold tracking-widest text-center md:text-right">
            &copy; {new Date().getFullYear()} Howden Broking Group.<br />
            Confidential & Proprietary.
          </div>
        </div>
      </footer>
    </main>
  );
}
