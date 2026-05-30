import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        background: '#ffffff',
        surface: '#f8f7f5',
        card: '#f4f3f0',
        border: '#e8e6e2',

        // Text
        foreground: '#141210',
        'text-secondary': '#4a4640',
        'text-tertiary': '#8a8480',

        // Brand - Olive
        olive: {
          50: '#f9faf7',
          100: '#f0f3e6',
          200: '#dce5ca',
          300: '#c8d6ad',
          400: '#b5c891',
          500: '#7ab648',
          600: '#3d4a2d',
          700: '#2e3821',
          800: '#2a3418',
          900: '#1f2610',
        },

        // Accent
        accent: '#a8c880',
        'accent-bg': '#eef1e9',

        // Neutral
        charcoal: '#2c2c2a',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        sm: ['13px', { lineHeight: '1.5' }],
        base: ['14px', { lineHeight: '1.6' }],
        lg: ['15px', { lineHeight: '1.7' }],
        xl: ['17px', { lineHeight: '1.75' }],
        '2xl': ['24px', { lineHeight: '1.25' }],
        '3xl': ['28px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '4xl': ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '5xl': ['60px', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        pill: '999px',
      },
      spacing: {
        gutter: 'max(1.5rem, (100vw - 1160px) / 2)',
      },
      keyframes: {
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'wa-pulse': {
          '0%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(2)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s ease forwards',
        'pulse-dot': 'pulse-dot 2s infinite',
        'wa-pulse': 'wa-pulse 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
