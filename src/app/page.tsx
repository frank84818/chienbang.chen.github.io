'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import WorkBackground from '@/components/backgrounds/WorkBackground';
import LifeBackground from '@/components/backgrounds/LifeBackground';

type Mode = 'work' | 'life';

export default function Home() {
  const [mode, setMode] = useState<Mode>('work');
  const isWork = mode === 'work';

  return (
    <div className={`min-h-screen transition-all duration-1000 ease-in-out relative overflow-hidden ${
      isWork ? 'text-slate-900' : 'text-[#554d4a] font-serif'
    }`}>
      {/* WebGL Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        {isWork ? <WorkBackground /> : <LifeBackground />}
        {/* Extra overlays for readability */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          isWork ? 'bg-white/40' : 'bg-white/20'
        }`} />
      </div>

      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-24 pb-32">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-full border border-gray-200 shadow-2xl flex items-center">
            <button
              onClick={() => setMode('work')}
              className={`px-10 py-3 rounded-full text-sm font-black transition-all duration-500 uppercase tracking-widest ${
                isWork ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setMode('life')}
              className={`px-10 py-3 rounded-full text-sm font-black transition-all duration-500 uppercase tracking-widest ${
                !isWork ? 'bg-amber-800 text-white shadow-xl' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              Life & Story
            </button>
          </div>
        </div>

        {/* Hero Section */}
        {isWork ? (
          <HeroSection
            theme="work"
            badge="Signal Analysis & Comm Engineering"
            title="CHIENBANG"
            highlightTitle="RESEARCH."
            description="Exploring the boundaries of Satellite Communications and advanced Signal Processing. Modern architectures for complex data environments."
            primaryCTA={{ text: "Access CV", href: "/work/cv" }}
            secondaryCTA={{ text: "Tech Stack", href: "/work/cv/skills" }}
          />
        ) : (
          <HeroSection
            theme="life"
            badge="旅 ・ 写真 ・ 記憶"
            title="捕捉日常與"
            highlightTitle="光影的瞬間。"
            description="Through the lens of travel and photography, I capture the essence of fleeting moments and timeless stories."
            primaryCTA={{ text: "View Story", href: "/life/wedding" }}
            secondaryCTA={{ text: "Photography", href: "/life/gallery" }}
          />
        )}

        {/* Feature Grid Section */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {isWork ? (
              <>
                <FeatureCard
                  theme="work"
                  icon="📡"
                  title="Professional Path"
                  description="A comprehensive look into my technical expertise, career history, and software engineering projects in satellite communications."
                  href="/work/cv"
                  footerText="View full CV"
                />
                <FeatureCard
                  theme="work"
                  icon="📊"
                  title="Signal Analysis"
                  description="Research on digital signal processing, spectral estimation, and real-time communication protocols."
                  href="/work/cv/experience"
                  footerText="Explore projects"
                />
              </>
            ) : (
              <>
                <FeatureCard
                  theme="life"
                  icon="💍"
                  title="Wedding Celebration"
                  description="Discover our journey, ceremony details, and all the information you need for our special day."
                  href="/life/wedding"
                  footerText="See the details"
                />
                <FeatureCard
                  theme="life"
                  icon="📸"
                  title="Photo Journal"
                  description="Capturing life through my camera. A collection of moments from travels and everyday life."
                  href="/life/journal"
                  footerText="Explore Gallery"
                />
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-16 border-t border-black/5 text-center">
        <div className="max-w-7xl mx-auto px-12 text-sm tracking-[0.5em] uppercase font-black opacity-30">
          © 2026 CHIENBANG.CHEN — {isWork ? 'SYSTEM_CHECK_OK' : '穏やかな午後'}
        </div>
      </footer>
    </div>
  );
}
