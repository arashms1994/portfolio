'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  selector?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
  selector = '.reveal-item',
  once = true,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('scroll-reveal-visible');
            entry.target.classList.add('scroll-reveal-hidden');
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = root.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin, selector, once]);

  return ref;
}

export default useScrollReveal;
