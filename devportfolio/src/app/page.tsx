'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode
    document.documentElement?.classList?.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement?.classList?.add('dark');
      } else {
        document.documentElement?.classList?.remove('dark');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}