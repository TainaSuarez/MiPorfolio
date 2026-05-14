import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#09111d',
          900: '#0d1724',
          850: '#101b2a',
          800: '#132031',
        },
        mist: {
          100: '#f3f4ff',
          200: '#d8ddff',
          300: '#bfc5ff',
          400: '#9fa7ff',
        },
        lilac: {
          300: '#b9a6ff',
          400: '#a48bff',
          500: '#8f73ff',
          600: '#7457ec',
        },
      },
      boxShadow: {
        lilac: '0 0 90px rgba(164, 139, 255, 0.25)',
        card: '0 24px 60px rgba(5, 10, 18, 0.28)',
      },
      backgroundImage: {
        radialGlow:
          'radial-gradient(circle at center, rgba(164, 139, 255, 0.22) 0%, rgba(164, 139, 255, 0.08) 32%, rgba(9, 17, 29, 0) 72%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
