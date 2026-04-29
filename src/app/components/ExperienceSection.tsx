'use client';

import React, { useEffect, useRef } from 'react';

const ExperienceSection: React.FC = () => {
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
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Expriences"
      className="py-16 bg-background-light dark:bg-background-dark"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="reveal-item scroll-reveal-hidden mb-14">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Epriences
          </h2>
        </div>
        <div className="flex justify-between items-center gap-20 flex-wrap">
          {/* Experience 1 */}
          <div className="w-[700px] reveal-item scroll-reveal-hidden rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Zarsim (2025 - 2026)
              </h3>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Developed and maintained responsive user interfaces aligned with modern web
                  standards
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Collaborated with cross-functional teams to deliver high-quality digital solutions
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Engaged with corporate clients to understand requirements and improve product
                  usability
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Contributed to enhancing user experience through continuous optimization and
                  feedback
                </span>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="w-[700px] reveal-item scroll-reveal-hidden rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Projan (2025 - 2026)
              </h3>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Designed and implemented interactive and user-friendly web interfaces{' '}
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Worked closely with team members to ensure consistency across projects
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Participated in client meetings to gather requirements and refine UI features
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Supported ongoing improvements based on user feedback and performance insights
                </span>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="w-[700px] reveal-item scroll-reveal-hidden rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Maktab Sharif (2024 - 2025)
              </h3>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Built and maintained web interfaces with a focus on usability and
                  responsiveness{' '}
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Collaborated with clients to update and improve digital services{' '}
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Assisted in onboarding and mentoring junior team members{' '}
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  Contributed to project planning and execution in a team environment{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
