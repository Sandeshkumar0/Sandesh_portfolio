import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { useDeviceTier, type DeviceTier } from '@/hooks/useDeviceTier';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  tier: DeviceTier;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  tier: 'medium',
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const tier = useDeviceTier();

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lenis = new Lenis({
        autoRaf: false,
        duration: reducedMotion ? 0 : 1.05,
        smoothWheel: !reducedMotion,
        syncTouch: false,
      });

      lenisRef.current = lenis;
      setLenis(lenis);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        lenis.off('scroll', ScrollTrigger.update);
        lenis.destroy();
        lenisRef.current = null;
        setLenis(null);
      };
    },
    { scope: rootRef },
  );

  return (
    <SmoothScrollContext.Provider value={{ lenis, tier }}>
      <div ref={rootRef} className="contents" data-device-tier={tier}>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}
