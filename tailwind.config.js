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
          DEFAULT: '#0D0D0D',
          surface: '#141414',
          elevated: '#1C1C1C',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A3AEBE',
          muted: '#7D8899',
        },
        border: {
          DEFAULT: '#1F2937',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#C9A84C',
          light: '#D9BE6E',
        },
        accent2: {
          DEFAULT: '#E0C989',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
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
        'card': '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201, 168, 76, 0.08)',
        'soft': '0 8px 24px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 30px rgba(201, 168, 76, 0.15)',
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
