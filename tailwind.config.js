/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF7',
          surface: '#F3F1EC',
          elevated: '#EAE7E0',
        },
        text: {
          primary: '#1A1612',
          secondary: '#5C5549',
          muted: '#8A8279',
        },
        border: {
          DEFAULT: '#E2DED6',
          light: '#D4CFC5',
        },
        accent: {
          DEFAULT: '#C4654A',
          light: '#D07A5E',
          dark: '#A85340',
          muted: '#C4654A1A',
        },
        accent2: {
          DEFAULT: '#D4956B',
          light: '#DFA97F',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-md': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '500' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.06em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.625rem',
        'lg': '0.875rem',
        'xl': '1.25rem',
        '2xl': '1.75rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(26, 22, 18, 0.04), 0 1px 2px rgba(26, 22, 18, 0.03)',
        'card-hover': '0 12px 40px rgba(26, 22, 18, 0.08), 0 4px 12px rgba(26, 22, 18, 0.04)',
        'soft': '0 4px 16px rgba(26, 22, 18, 0.06)',
        'glow': '0 0 24px rgba(196, 101, 74, 0.12)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        'site': '1200px',
        'narrow': '720px',
      },
    },
  },
  plugins: [],
}
