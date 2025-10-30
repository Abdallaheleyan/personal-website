'use client';

import { scrollToSection } from '@/lib/utils';
import { PersonalInfo } from '@/lib/types';
import { RefObject } from 'react';

interface HeroProps {
  backgroundKey: number;
  heroRef: RefObject<HTMLElement | null>;
  personal: PersonalInfo;
}

export function Hero({ backgroundKey, heroRef, personal }: HeroProps) {
  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e]">
      {backgroundKey > 0 && (
        <div
          key={backgroundKey}
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 58 + 2;
            const duration1 = 30 + Math.random() * 40;
            const duration2 = 3 + Math.random() * 3;

            return (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: i % 4 === 0
                    ? `radial-gradient(circle, #4BC7BD, transparent)`
                    : i % 4 === 1
                      ? `radial-gradient(circle, #7DD3C0, transparent)`
                      : i % 4 === 2
                        ? `radial-gradient(circle, #ffffff, transparent)`
                        : `radial-gradient(circle, #8B5CF6, transparent)`,
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `universeFloat ${duration1}s linear infinite, universePulse ${duration2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 10}s, ${Math.random() * 3}s`,
                  filter: size > 30 ? 'blur(1px)' : 'none',
                  boxShadow: size > 20 ? `0 0 ${size / 2}px rgba(75, 199, 189, 0.4)` : 'none',
                  zIndex: -1
                }}
              />
            );
          })}

          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, rgba(15, 15, 15, 0.1) 50%, rgba(26, 26, 46, 0.2) 100%)`,
              zIndex: -2
            }}
          />

          {[...Array(50)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                background: '#ffffff',
                borderRadius: '50%',
                animation: `twinkle ${1 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: '0 0 6px #ffffff',
                zIndex: -1
              }}
            />
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes universeFloat {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg); }
          50% { transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) rotate(180deg); }
          75% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes universePulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>

      <div className="text-center z-10 relative max-w-6xl mx-auto">
        <h1 className="hero-title text-4xl sm:text-6xl lg:text-9xl font-black mb-4 sm:mb-8 leading-none mt-8 sm:mt-0">
          <span className="bg-gradient-to-r from-white via-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>
        <h2 className="hero-subtitle text-2xl sm:text-4xl lg:text-6xl font-bold text-[#4BC7BD] mb-6 sm:mb-8">
          {personal.subtitle}
        </h2>
        <p className="hero-description text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
          {personal.description}
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] text-black px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform neon-glow"
          >
            Let&apos;s work together
          </button>
          <a
            href="/AbdallahEleyan_CV.pdf"
            download="AbdallahEleyan_CV.pdf"
            className="bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] text-black px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform neon-glow flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


