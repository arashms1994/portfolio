'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Expriences', href: '#Expriences' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <AppLogo
              size={32}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            />
            <span className="font-bold text-base tracking-tight text-foreground hidden sm:block">
              Arash's Portfolio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              <Icon name={isDark ? 'SunIcon' : 'MoonIcon'} size={16} />
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-card text-foreground"
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
              setMobileOpen(false);
            }}
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-xl text-base font-bold"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
