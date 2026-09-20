'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { useTheme } from '@/lib/hooks/useTheme';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { isDark, toggleTheme, mounted } = useTheme('dark');

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className={`relative w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-all duration-200 text-muted-foreground hover:text-foreground overflow-hidden group ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          mounted && isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
        }`}
      >
        <Icon name="SunIcon" size={16} />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          mounted && !isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
        }`}
      >
        <Icon name="MoonIcon" size={16} />
      </span>
    </button>
  );
}
