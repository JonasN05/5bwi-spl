/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#2D2B03',
        backgroundCard: '#D9D9D9',
      },
      fontFamily: {
        'cardDescription': ['"JetBrains Mono"', 'monospace'],
        'headFont': ['"Jaro"', 'sans-serif'],
      },
    },

  },
  plugins: [],
}