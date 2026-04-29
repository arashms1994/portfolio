'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
{ icon: 'CodeBracketIcon', label: 'Clean Code', desc: 'Readable, maintainable, well-documented.' },
{ icon: 'BoltIcon', label: 'Performance First', desc: 'Core Web Vitals obsessed. Lighthouse 95+.' },
{ icon: 'SparklesIcon', label: 'AI-Curious', desc: 'Building at the edge of design and intelligence.' }];


export default function AboutSection() {
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
    <section id="about" className="py-24 px-6 border-b border-border" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo + floating stat */}
          <div className="reveal-item scroll-reveal-hidden relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-border">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d42d46d1-1770558252213.png"
                alt="Developer working at a bright well-lit desk with code visible on screen, airy open workspace with natural light"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw" />

              {/* Light scrim for dark text overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating location badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs font-semibold text-white animate-float">
                <Icon name="MapPinIcon" size={12} className="text-primary" />
                San Francisco, CA
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-xs font-mono">// always learning</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-3 lg:-right-8 glass-card rounded-xl p-4 flex items-center gap-3 border border-border backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="TrophyIcon" size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">Open Source</div>
                <div className="text-sm font-bold text-foreground">340+ contributions</div>
              </div>
            </div>
          </div>

          {/* Right: About copy */}
          <div className="reveal-item scroll-reveal-hidden flex flex-col justify-between h-full" style={{ transitionDelay: '150ms' }}>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Turning ideas into
                <span className="text-gradient-lime"> experiences.</span>
              </h2>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed font-normal border-l-2 border-border pl-5 mb-8">
                <p>
                  I&apos;m Alex Rivera, a front-end developer with 4 years of experience building production-grade web applications. I specialize in the React ecosystem and have a deep appreciation for the craft of UI engineering.
                </p>
                <p>
                  My background spans B2B SaaS, design tools, and AI-powered interfaces. I care deeply about the details — accessibility, performance, and the subtle micro-interactions that make products feel alive.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring the intersection of AI and user interfaces, contributing to open source, or writing about modern web development patterns.
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-4">
                {highlights.map((h, i) =>
                <div key={h.label} className="flex items-start gap-4 group" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon name={h.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-0.5">{h.label}</div>
                      <div className="text-xs text-muted-foreground">{h.desc}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 group">

                <Icon name="DocumentArrowDownIcon" size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
                Download Resume
              </a>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}