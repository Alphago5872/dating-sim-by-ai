/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "pink-1": '#E2B2C9',
        "pink-2": "#E97272",
        "pink-3": "#8E3560",
        "pink-4": "#D687AD"
      },
      borderColor: {
        "pink-4": "#D687AD"
      }
    },
  },
  plugins: [],
}

