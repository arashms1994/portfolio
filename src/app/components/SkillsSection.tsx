'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Core',
    icon: 'ComputerDesktopIcon',
    skills: [
      { name: 'JavaScript (ES2024)', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 100 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'CubeIcon',
    skills: [
      { name: 'React 19', level: 92 },
      { name: 'Next.js 15', level: 90 },
      { name: 'Tailwind CSS', level: 94 },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: 'ServerIcon',
    skills: [
      { name: 'SharePoint', level: 80 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'Node.js', level: 30 },
    ],
  },
];

const techPills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Tailwind CSS', 'Node.js', 'Figma',
  'Vercel', 'PostgreSQL', 'WebSockets', 'OpenAI API',
  'Framer Motion', 'CSS Grid',
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');

            // Animate progress bars
            const bars = entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill');
            bars.forEach((bar) => {
              const target = bar.getAttribute('data-level') || '0';
              bar.style.width = `${target}%`;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 border-b border-border bg-secondary/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal-item scroll-reveal-hidden mb-14">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Technical Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills
          </h2>
        </div>

        {/* Asymmetric 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left 60%: Skill Categories with progress bars */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {skillCategories.map((cat, catIdx) => (
              <div
                key={cat.category}
                className="reveal-item scroll-reveal-hidden"
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: '0%',
                            background: 'linear-gradient(90deg, #A8D030, #C8F04C, #E8FF7A)',
                            transitionDelay: `${catIdx * 100 + 200}ms`,
                          }}
                          data-level={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right 40%: Tech pill cloud + stat card */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-between">
            {/* Pill cloud */}
            <div className="reveal-item scroll-reveal-hidden" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech, i) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-default hover:-translate-y-0.5"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat card — fills right column */}
            <div className="reveal-item scroll-reveal-hidden rounded-2xl border border-border bg-card p-6 flex flex-col gap-4" style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Currently Exploring
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {['AI / LLM Integration', 'BackEnd Skills', 'React Server Components'].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Actively building with AI APIs and exploring the boundaries of what's possible in the browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}