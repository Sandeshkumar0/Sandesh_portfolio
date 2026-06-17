import { useState, useEffect } from 'react';

export const useAnimationPreference = (): boolean => {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = setTimeout(() => {
      setPrefersReduced(mq.matches);
    }, 0);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => {
      clearTimeout(timer);
      mq.removeEventListener('change', handler);
    };
  }, []);

  return prefersReduced;
};
