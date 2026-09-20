'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

interface Experience {
  company: string;
  period: string;
  icon: string;
  points: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Zarsim',
    period: '2025 - 2026',
    icon: 'BriefcaseIcon',
    points: [
      'Developed and maintained responsive user interfaces aligned with modern web standards',
      'Collaborated with cross-functional teams to deliver high-quality digital solutions',
      'Engaged with corporate clients to understand requirements and improve product usability',
      'Contributed to enhancing user experience through continuous optimization and feedback',
    ],
  },
  {
    company: 'Projan',
    period: '2025 - 2026',
    icon: 'RocketLaunchIcon',
    points: [
      'Designed and implemented interactive and user-friendly web interfaces',
      'Worked closely with team members to ensure consistency across projects',
      'Participated in client meetings to gather requirements and refine UI features',
      'Supported ongoing improvements based on user feedback and performance insights',
    ],
  },
  {
    company: 'Maktab Sharif',
    period: '2024 - 2025',
    icon: 'AcademicCapIcon',
    points: [
      'Built and maintained web interfaces with a focus on usability and responsiveness',
      'Collaborated with clients to update and improve digital services',
      'Assisted in onboarding and mentoring junior team members',
      'Contributed to project planning and execution in a team environment',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experiences"
      className="relative py-24 px-6 border-b border-border bg-secondary/30 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl blob-drift pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="reveal-item scroll-reveal-hidden mb-14">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experiences
          </h2>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.company}
                className={`reveal-item scroll-reveal-hidden ${
                  idx % 2 === 0 ? 'reveal-left' : 'reveal-right'
                } md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                      <Icon
                        name={exp.icon as Parameters<typeof Icon>[0]['name']}
                        size={16}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        {exp.company}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {exp.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 group/point">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0 group-hover/point:scale-150 transition-transform" />
                        <span className="text-sm text-foreground font-medium group-hover/point:text-primary transition-colors">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
