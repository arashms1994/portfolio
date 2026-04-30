'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { PROJECTS } from '@/lib/constants';
import Project from '@/components/Project';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 border-b border-border" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal-item scroll-reveal-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/arashms1994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all on GitHub
            <Icon
              name="ArrowRightIcon"
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {PROJECTS.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
