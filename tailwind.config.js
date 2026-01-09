/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#55B76B',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        kaoly: ['Kaoly', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        h1: '48px',
        h2: '40px',
        h3: '36px',
        h4: '16px',
        b1: '20px',
        b2: '24px',
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}
