'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { PROJECTS } from '@/lib/constants';
import Project from '@/components/Project';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

export default function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-b border-border overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl blob-drift pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
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
