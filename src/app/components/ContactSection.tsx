'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const socials = [
  {
    label: 'GitHub',
    icon: 'CodeBracketIcon',
    href: 'https://github.com/arashms1994',
    handle: '@arashms1994',
  },
  {
    label: 'LinkedIn',
    icon: 'BriefcaseIcon',
    href: 'https://www.linkedin.com/in/arashmoghadamsalimi',
    handle: 'arashmoghadamsalimi',
  },
  { label: 'Phone', icon: 'PhoneIcon', href: 'tel:+989127155200', handle: '+98 912 715 5200' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arash.ms1994@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal-item scroll-reveal-hidden mb-14 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Let&apos;s build something
            <span className="text-gradient-lime"> together.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            I&apos;m currently open to full-time roles and select freelance projects. If you have
            something interesting in mind, reach out.
          </p>
        </div>

        {/* Dark contact card */}
        <div
          className="reveal-item scroll-reveal-hidden relative rounded-2xl overflow-hidden border border-border bg-foreground dark:bg-card group transition-all duration-500"
          style={{ transitionDelay: '100ms' }}
        >
          {/* Shimmer on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none z-0" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Email CTA */}
            <div className="p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                  Available Now
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white dark:text-foreground tracking-tight mb-3">
                Say hello.
              </h3>
              <p className="text-white/60 dark:text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
                The best way to reach me is via email. I typically respond within 24 hours on
                weekdays.
              </p>

              {/* Email row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="mailto:arash.ms1994@gmail.com"
                  className="flex items-center gap-2 text-lg font-bold text-white dark:text-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0" />
                  arash.ms1994@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 dark:bg-muted hover:bg-primary/20 transition-all duration-200 text-xs font-medium text-white/60 dark:text-muted-foreground hover:text-primary flex-shrink-0"
                >
                  <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={13} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Main CTA */}
              <div className="mt-8">
                <a
                  href="mailto:arash.ms1994@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 group/cta"
                >
                  Send Me an Email
                  <Icon
                    name="ArrowRightIcon"
                    size={15}
                    className="group-hover/cta:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <a
                  href="documents/Arash-Moghadam-Salimi.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <Icon
                    name="DocumentArrowDownIcon"
                    size={15}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  Download Resume
                </a>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Open to opportunities
                </div>
              </div>
            </div>

            {/* Right: Socials */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h4 className="text-xs font-semibold text-white/40 dark:text-muted-foreground uppercase tracking-widest mb-8">
                Find Me Online
              </h4>

              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-white/10 dark:border-border bg-white/5 dark:bg-muted/50 hover:bg-white/10 dark:hover:bg-muted hover:border-primary/30 transition-all duration-200 group/social"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 dark:bg-card flex items-center justify-center group-hover/social:bg-primary/20 transition-colors">
                        <Icon
                          name={social.icon as Parameters<typeof Icon>[0]['name']}
                          size={16}
                          className="text-white/60 dark:text-muted-foreground group-hover/social:text-primary transition-colors"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white dark:text-foreground">
                          {social.label}
                        </div>
                        <div className="text-xs text-white/40 dark:text-muted-foreground font-mono">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={14}
                      className="text-white/30 dark:text-muted-foreground group-hover/social:text-primary group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
              </div>

              {/* Response time note */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-border">
                <div className="flex items-center gap-2 text-xs text-white/40 dark:text-muted-foreground">
                  <Icon name="ClockIcon" size={13} />
                  Avg. response time: under 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
