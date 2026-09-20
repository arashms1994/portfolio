'use client';

import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, duration = 1600, decimals = 0, start = 0) {
  const [value, setValue] = useState(start);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const factor = Math.pow(10, decimals);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let started = false;

    const run = () => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round((start + (target - start) * eased) * factor) / factor);
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setDone(true);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, start, factor]);

  return { value, done, ref };
}

export default useCountUp;
