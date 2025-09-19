'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PortfolioData } from '@/lib/types';

gsap.registerPlugin(ScrollTrigger);

export function useHomeAnimations(data: PortfolioData | null) {
  const [backgroundKey, setBackgroundKey] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mouseFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && mainRef.current) {
      initAnimations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (data) {
      setBackgroundKey(1);
      startTypewriter(data.personal?.description || '');
    }
  }, [data]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        gsap.to(mouseFollowerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const startTypewriter = (text: string) => {
    const element = document.querySelector('.hero-description');
    let i = 0;
    const timer = setInterval(() => {
      if (element) {
        element.innerHTML = text.slice(0, i) + '<span class="animate-pulse">|</span>';
      }
      i++;
      if (i > text.length) {
        clearInterval(timer);
        if (element) element.innerHTML = text;
      }
    }, 80);
  };

  const initAnimations = () => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.fromTo('.hero-badge', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
        .fromTo('.hero-title', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.1')
        .fromTo('.hero-subtitle', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2')
        .fromTo('.hero-description', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.1')
        .fromTo('.hero-buttons', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.1');

      (gsap.utils.toArray('.section-animate') as Element[]).forEach((section: Element) => {
        gsap.fromTo(section.querySelector('.section-title'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      (gsap.utils.toArray('.project-item') as Element[]).forEach((card: Element, index: number) => {
        gsap.fromTo(card,
          { y: 25, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.35,
            delay: index * 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      (gsap.utils.toArray('.skill-tag') as Element[]).forEach((skill: Element, index: number) => {
        gsap.fromTo(skill,
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            delay: index * 0.03,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: (skill as Element).parentElement,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      gsap.fromTo('.contact-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      (gsap.utils.toArray('.floating-bg') as Element[]).forEach((element: Element, index: number) => {
        gsap.to(element, {
          y: -30,
          rotation: 90,
          duration: 3 + index * 0.5,
          repeat: -1,
          ease: 'none'
        });
      });
    }, mainRef);

    return () => ctx.revert();
  };

  return { mainRef, heroRef, mouseFollowerRef, backgroundKey };
}

export default useHomeAnimations;


