/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      // Legacy names remain aliases so existing component layouts stay intact.
      colors: {
        canvas: 'rgb(var(--page) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        label: 'rgb(var(--label) / <alpha-value>)',
        focus: 'rgb(var(--focus) / <alpha-value>)',
        ink: 'rgb(var(--page) / <alpha-value>)',
        paper: 'rgb(var(--foreground) / <alpha-value>)',
        acid: 'rgb(var(--accent) / <alpha-value>)',
        rust: 'rgb(var(--secondary) / <alpha-value>)',
        slate: 'rgb(var(--surface) / <alpha-value>)',
        muted: 'rgb(var(--border) / <alpha-value>)',
        dim: 'rgb(var(--label) / <alpha-value>)',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
