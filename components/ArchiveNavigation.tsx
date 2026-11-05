import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useSmoothScroll } from '@/components/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navItems = [
  { label: 'Bounty', href: '#bounty' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function ArchiveNavigation() {
  const { lenis } = useSmoothScroll();
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('bounty');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${self.progress})`;
        }
      },
    });

    return () => trigger.kill();
  }, { scope: progressRef });

  const navigateTo = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: -24, duration: 0.85 });
    } else {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <div className="archive-progress" aria-hidden="true">
        <div ref={progressRef} className="archive-progress-bar" />
      </div>
      <nav className="archive-navigation" aria-label="Grand Line Archive">
        <a href="#top" className="inline-flex items-center" aria-label="AZ home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/az-logo-brown.png" alt="AZ logo" className="site-logo" />
        </a>

        <button
          type="button"
          className="archive-menu-button"
          aria-expanded={menuOpen}
          aria-controls="archive-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation menu</span>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div id="archive-menu" className={`archive-menu${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.href);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
