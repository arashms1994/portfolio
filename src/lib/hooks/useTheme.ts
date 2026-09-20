'use client';

import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

export function useTheme(defaultTheme: Theme = 'dark') {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const initial = stored ?? defaultTheme;
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, [defaultTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      window.localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return { theme, isDark: theme === 'dark', toggleTheme, mounted };
}

export default useTheme;
