/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050c1a',
          800: '#0a1628',
          700: '#0f2040',
          600: '#162b54',
          500: '#1e3a6e',
          400: '#2a4f94',
        },
        gold: {
          900: '#78350f',
          800: '#92400e',
          700: '#b45309',
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
          200: '#fde68a',
          100: '#fef3c7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'solar-gradient': 'linear-gradient(135deg, #050c1a 0%, #0f2040 40%, #1e3a6e 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(5,12,26,0.55) 0%, rgba(5,12,26,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px -4px rgba(245, 158, 11, 0.35)',
        'navy': '0 8px 40px -8px rgba(5, 12, 26, 0.6)',
        'glow': '0 0 40px rgba(245, 158, 11, 0.2)',
      },
    },
  },
  plugins: [],
};
