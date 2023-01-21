/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nabla': ['Nabla', 'cursive'],
      'bungee': ['Bungee Shade', 'cursive'],
      'gloria': ['Gloria Hallelujah', 'cursive'],
      'quicksand': ['Quicksand', 'sans-serif']
    },
  },
  plugins: [],
}
