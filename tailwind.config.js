/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#070B14',
          surface: '#0C1220',
          elevated: '#121A2C',
        },
        text: {
          primary: '#F2F0EB',
          secondary: '#AAB2C2',
          muted: '#7C8698',
        },
        border: {
          DEFAULT: '#1A2335',
          light: '#2B3650',
        },
        accent: {
          DEFAULT: '#4ADEB5',
          light: '#7FEBCD',
        },
        accent2: {
          DEFAULT: '#7FEBCD',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-lg': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.04em' }],
        'label': ['0.6875rem', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0.22em' }],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 50px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(74, 222, 181, 0.18)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.45)',
        'glow': '0 0 32px rgba(74, 222, 181, 0.25)',
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
        'site': '1280px',
        'narrow': '760px',
      },
    },
  },
  plugins: [],
}
