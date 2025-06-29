/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 5s ease-in-out infinite',
        'blob1': 'blob1 14s ease-in-out infinite',
        'blob2': 'blob2 18s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, 20px) scale(1.1)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-30px, -20px) scale(1.15)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        chefOrange: '#B44100',
        gridGray: '#2b2b2b',
        darkBg: '#070707',
      },
      blur: {
        150: '150px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),]
}
