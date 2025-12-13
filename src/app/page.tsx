'use client';


import { usePortfolioData } from '@/hooks/usePortfolioData';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { useHomeAnimations } from '@/hooks/useHomeAnimations';

export default function Home() {
  const { data, loading, error } = usePortfolioData();
  const { mainRef, heroRef, mouseFollowerRef, backgroundKey } = useHomeAnimations(data);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white overflow-hidden flex items-center justify-center">
        <div className="text-center z-10 relative">
          <div className="w-20 h-20 border-4 border-[#4BC7BD] border-t-transparent rounded-full mb-8 mx-auto animate-spin" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-[#4BC7BD] bg-clip-text text-transparent">
            Loading Portfolio...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Error Loading Portfolio</h1>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div
      ref={mainRef}
      className="emergency-visible min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden"
    >
      <Navbar />
      <Hero backgroundKey={backgroundKey} heroRef={heroRef} personal={data.personal} />
      <Projects projects={data.projects} />
      <About skills={data.skills} />
      <Education />
      <Contact email={data.personal.email} />
      <Footer name={data.personal.name} subtitle={data.personal.subtitle} social={data.social} />

      {data && (
        <div
          ref={mouseFollowerRef}
          className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(75, 199, 189, 0.8) 0%, transparent 70%)',
            filter: 'drop-shadow(0 0 10px rgba(75, 199, 189, 0.8))'
          }}
        />
      )}
    </div>
  );
}