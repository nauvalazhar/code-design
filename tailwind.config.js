/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{app,components}/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)',
      },
      colors: {
        brand: {
          DEFAULT: '#FFD466',
        },
      },
      boxShadow: {
        'solid-sm': '8px 8px 0 #000',
        solid: '15px 15px 0 #000',
      },
    },
  },
  plugins: [],
};
