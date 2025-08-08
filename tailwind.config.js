/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        waterWave: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.01)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        gradient: 'gradient 2s linear infinite',
        shine: 'shine 2.5s linear infinite',
        waterWave: 'waterWave 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
