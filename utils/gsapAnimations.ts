import gsap from 'gsap';
import type { RefObject } from 'react';

/** Wake-up animation for cartoon character on Hero */
export const animateCartoonWakeUp = (ref: RefObject<HTMLDivElement | null>) => {
  if (!ref.current) return;
  const tl = gsap.timeline({ delay: 0.3 });
  tl.from(ref.current, { duration: 0.6, x: -200, y: 200, opacity: 0, rotation: -10, ease: 'power2.out' })
    .to(ref.current, { duration: 0.5, scaleY: 1.08, ease: 'sine.inOut' }, 0.8)
    .to(ref.current, { duration: 0.3, scaleY: 1, ease: 'back.out' });
  gsap.to(ref.current, { duration: 3, y: '-=20', repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });
  return tl;
};

/** Ripple effect on button click */
export const rippleEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('div');
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    position:absolute; border-radius:50%; pointer-events:none;
    width:${size}px; height:${size}px;
    left:${event.clientX - rect.left - size / 2}px;
    top:${event.clientY - rect.top - size / 2}px;
    background:rgba(0,217,255,0.35);
    transform:scale(0);
  `;
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  gsap.to(ripple, {
    duration: 0.6, scale: 4, opacity: 0, ease: 'power2.out',
    onComplete: () => ripple.remove(),
  });
};

/** Create floating particles in a container */
export const particleSystem = (containerRef: RefObject<HTMLDivElement | null>, count = 20) => {
  if (!containerRef.current) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 2;
    p.style.cssText = `
      position:absolute; width:${size}px; height:${size}px;
      background:radial-gradient(circle,#00d9ff,#0088ff); border-radius:50%;
      left:${Math.random() * 100}%; top:${Math.random() * 100}%;
      box-shadow:0 0 ${size * 3}px rgba(0,217,255,0.8); opacity:.6; pointer-events:none;
    `;
    containerRef.current.appendChild(p);
    gsap.to(p, {
      duration: Math.random() * 10 + 10,
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      opacity: 0, repeat: -1, ease: 'sine.inOut', delay: Math.random() * 3,
    });
  }
};
