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
      'landrina': ['Londrina Shadow', 'cursive'],
      'bungee': ['Bungee Shade', 'cursive'],
      'gloria': ['Gloria Hallelujah', 'cursive'],
    },
  },
  plugins: [],
}
