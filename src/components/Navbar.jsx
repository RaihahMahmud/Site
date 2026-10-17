import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();
  const menuButton = useRef(null);
  const menuPanel = useRef(null);
  const closeMenu = () => {
    setMenuOpen(false);
    menuButton.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    menuPanel.current?.querySelector('a')?.focus();
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      }
    };
    const media = window.matchMedia('(min-width: 768px)');
    const onResize = () => {
      if (media.matches) {
        if (menuPanel.current?.contains(document.activeElement) || document.activeElement === menuButton.current) {
          document.querySelector('nav[aria-label="Primary"] a')?.focus();
        }
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      media.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`field-nav fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-colors duration-200 ${
        scrolled ? 'border-b border-border pb-2' : ''
      }`}>
        <a href="#home" className="font-mono text-sm font-medium text-paper hover:text-acid transition-colors">
          <span className="text-acid">{'>'}</span>_raihan
        </a>

        <nav className="hidden md:flex items-center gap-4 lg:gap-7" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-dim hover:text-paper focus-visible:text-paper transition-colors hover-underline tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:raihankhmahmud@gmail.com"
          className="hidden lg:flex items-center gap-2 font-mono text-xs text-ink bg-acid px-4 py-2 rounded-sm hover:bg-paper transition-colors font-medium"
        >
          Hire Me
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButton}
            aria-controls="mobile-navigation"
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11"
            onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-paper transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-paper transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-paper transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            ref={menuPanel}
            onBlur={event => {
              if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuButton.current) setMenuOpen(false);
            }}
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-1 max-h-[75svh] overflow-y-auto"
          >
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="font-mono text-sm text-dim hover:text-acid transition-colors py-3"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:raihankhmahmud@gmail.com"
              onClick={closeMenu}
              className="font-mono text-sm text-acid py-3"
            >
              Hire Me
            </a>
          </motion.nav>
        )}
    </header>
  );
}
