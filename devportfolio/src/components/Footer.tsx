import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + links */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <AppLogo size={24} />
            <span className="text-sm font-semibold text-foreground">Arash's Portfolio</span>
          </div>
          <span className="hidden sm:block text-border">·</span>
          <nav className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#Expriences" className="hover:text-foreground transition-colors">Expriences</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2026 Made by ARASH ❤️ · Privacy · Terms
        </p>
      </div>
    </footer>
  );
}