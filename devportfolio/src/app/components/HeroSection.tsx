'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const stats = [
  { label: 'Projects Shipped', value: '20+' },
  { label: 'Years Experience', value: '3' },
  { label: 'GitHub Commits', value: '1.2k' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const blob1 = hero.querySelector<HTMLElement>('.parallax-blob-1');
      const blob2 = hero.querySelector<HTMLElement>('.parallax-blob-2');
      if (blob1) {
        blob1.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
      }
      if (blob2) {
        blob2.style.transform = `translate(${x * -15 + 7}px, ${y * -15 + 7}px)`;
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-border"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_17ec421bf-1772186759404.png"
          alt="Dark developer workspace with multiple monitors showing code, atmospheric dim lighting, deep shadows, dark steel desk environment"
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />

        {/* Gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Atmospheric blobs */}
      <div
        className="parallax-blob-1 absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,76,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div
        className="parallax-blob-2 absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,76,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Hero Copy */}
          <div className="lg:col-span-8">
            {/* Status pill */}
            {/* <div
              className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-xs font-semibold text-muted-foreground mb-8 uppercase tracking-widest">

              <span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{ animation: 'pulse-ring 2s infinite' }} />

              Available for Hire · 2026
            </div> */}

            {/* Headline */}
            <h1
              className="animate-fade-in-up delay-100 font-bold tracking-tight leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              <span className="block text-foreground">Arash</span>
              <span className="block text-gradient-lime">Moghadam Salimi</span>
              <span
                className="block font-light text-muted-foreground"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                Front-End Developer
              </span>
            </h1>

            {/* Intro */}
            <p className="animate-fade-in-up delay-200 text-base text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary pl-5 mb-10 font-normal">
              Crafting scalable, accessible, and performance-driven interfaces with React and modern
              web technologies.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                View Projects
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 border border-border bg-card/40 backdrop-blur-sm text-foreground rounded-xl font-semibold text-sm hover:bg-card/70 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Stat Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 animate-fade-in-up delay-400">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 cursor-default group"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                    {stat.label}
                  </span>
                </div>
                <div className="text-3xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
