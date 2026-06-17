import React, { useEffect, useRef } from 'react';

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const MovingAtoms: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let atoms: Atom[] = [];
    const maxDistance = 140; // Max distance for drawing connection lines

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initAtoms();
    };

    const initAtoms = () => {
      const density = 18000; // Pixels per particle
      const count = Math.max(30, Math.min(80, Math.floor((canvas.width * canvas.height) / density)));
      atoms = [];

      for (let i = 0; i < count; i++) {
        atoms.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // Slow drift velocity
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5, // Atom size
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update atoms
      for (let i = 0; i < atoms.length; i++) {
        const a = atoms[i];

        // Move atom
        a.x += a.vx;
        a.y += a.vy;

        // Bounce off bounds
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        // Draw atom glow
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${a.alpha * 0.15})`;
        ctx.fill();

        // Draw atom core
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${a.alpha})`;
        ctx.fill();

        // Draw links between nearby atoms
        for (let j = i + 1; j < atoms.length; j++) {
          const b = atoms[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MovingAtoms;
