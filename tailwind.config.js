/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      firstcolor : '#0E2E2C',
      secondcolor :'#94E79B',
      threecolor : '#F9F871',
      grey : '#D9D9D9',
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      'Nunito': ['Nunito Sans','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

