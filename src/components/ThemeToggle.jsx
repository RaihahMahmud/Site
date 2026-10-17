import { useEffect, useRef, useState } from 'react';

const storageKey = 'portfolio-theme';
const isTheme = value => value === 'light' || value === 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const preference = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = value => {
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      setTheme(value);
    };
    try { preference.current = localStorage.getItem(storageKey); } catch {}
    const syncSystem = () => {
      if (!isTheme(preference.current)) apply(media.matches ? 'dark' : 'light');
    };
    const syncStorage = event => {
      if (event.key !== storageKey && event.key !== null) return;
      preference.current = event.newValue;
      if (isTheme(event.newValue)) apply(event.newValue);
      else syncSystem();
    };
    syncSystem();
    media.addEventListener('change', syncSystem);
    window.addEventListener('storage', syncStorage);
    return () => {
      media.removeEventListener('change', syncSystem);
      window.removeEventListener('storage', syncStorage);
    };
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    preference.current = next;
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch {}
  };

  return (
    <button type="button" onClick={toggle} className="theme-toggle"
      aria-label="Dark theme" aria-pressed={theme === 'dark'}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>
          : <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />}
      </svg>
      <span className="sr-only">{theme === 'dark' ? 'Dark' : 'Light'} theme active</span>
    </button>
  );
}
