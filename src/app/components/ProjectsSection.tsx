'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
  featured: boolean;
  year: string;
}

const projects: Project[] = [
{
  id: 1,
  title: 'Pulse Dashboard',
  description: 'A real-time analytics dashboard for SaaS businesses. Built with Next.js 14, React Query, and Recharts. Features live data streaming, customizable widgets, and role-based access control.',
  tags: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS', 'React Query'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1eb3d60-1777367904588.png",
  imageAlt: 'Dark analytics dashboard with charts and graphs on multiple monitors in dim office lighting',
  github: '#',
  demo: '#',
  featured: true,
  year: '2025'
},
{
  id: 2,
  title: 'Forma Design System',
  description: 'An open-source React component library with 60+ accessible components, dark/light mode, and full TypeScript support.',
  tags: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e916aed-1776507197797.png",
  imageAlt: 'Clean white design system component layout on bright well-lit workspace',
  github: '#',
  demo: '#',
  featured: false,
  year: '2025'
},
{
  id: 3,
  title: 'NovaMind AI Interface',
  description: 'A conversational AI interface inspired by modern chat UX patterns. Integrates with multiple LLM APIs, supports streaming responses, and includes a prompt library with syntax highlighting.',
  tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'WebSockets'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c9a97f6-1772716180915.png",
  imageAlt: 'Futuristic AI chat interface glowing on dark screen with deep blue atmospheric lighting',
  github: '#',
  demo: '#',
  featured: false,
  year: '2026'
}];


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
        {/* Header */}
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">

            View all on GitHub
            <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Bento Grid — 3 cards
           STEP 1: Array has 3 cards: [Pulse Dashboard, Forma Design System, NovaMind AI]
           STEP 2 (lg):
             Row 1: [col-1,2: Pulse Dashboard cs-2] [col-3: Forma Design System cs-1]
             Row 2: [col-1,2,3: NovaMind AI cs-3]
           Placed 3/3 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Pulse Dashboard — featured, col-span-2 */}
          {/* BENTO: col-1,2 cs-2 rs-1 */}
          <div className="reveal-item scroll-reveal-hidden md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          style={{ transitionDelay: '0ms' }}>
            {/* Image */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              <AppImage
                src={projects[0].image}
                alt={projects[0].imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              {/* Featured badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                Featured
              </div>
              <div className="absolute top-4 right-4 text-xs text-white/60 font-mono">{projects[0].year}</div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{projects[0].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{projects[0].description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].tags.map((tag) =>
                <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                    {tag}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a href={projects[0].github} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link">
                  <Icon name="CodeBracketIcon" size={15} />
                  GitHub
                  <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <span className="w-px h-4 bg-border" />
                <a href={projects[0].demo} className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity group/link">
                  Live Demo
                  <Icon name="ArrowTopRightOnSquareIcon" size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Forma Design System — col-span-1 */}
          {/* BENTO: col-3 cs-1 rs-1 */}
          <div className="reveal-item scroll-reveal-hidden group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          style={{ transitionDelay: '100ms' }}>
            <div className="relative h-44 overflow-hidden">
              <AppImage
                src={projects[1].image}
                alt={projects[1].imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              <div className="absolute top-3 right-3 text-xs text-white/50 font-mono">{projects[1].year}</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground mb-1.5 tracking-tight">{projects[1].title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{projects[1].description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {projects[1].tags.slice(0, 3).map((tag) =>
                <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-medium">
                    {tag}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <a href={projects[1].github} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="CodeBracketIcon" size={13} /> GitHub
                </a>
                <span className="w-px h-3 bg-border" />
                <a href={projects[1].demo} className="flex items-center gap-1.5 text-xs font-medium text-primary hover:opacity-80 transition-opacity">
                  Demo <Icon name="ArrowTopRightOnSquareIcon" size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: NovaMind AI — col-span-3 (full width) */}
          {/* BENTO: col-1,2,3 cs-3 rs-1 */}
          <div className="reveal-item scroll-reveal-hidden lg:col-span-3 md:col-span-2 group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative h-56 md:h-auto overflow-hidden">
                <AppImage
                  src={projects[2].image}
                  alt={projects[2].imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
                <div className="absolute top-4 right-4 text-xs text-white/60 font-mono">{projects[2].year}</div>
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">AI-Powered</span>
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{projects[2].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{projects[2].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map((tag) =>
                  <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a href={projects[2].github} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link">
                    <Icon name="CodeBracketIcon" size={15} /> GitHub
                  </a>
                  <a href={projects[2].demo} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity group/link">
                    Live Demo
                    <Icon name="ArrowRightIcon" size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}