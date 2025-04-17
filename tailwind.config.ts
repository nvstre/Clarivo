/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#0E1C36',
        accent1: '#F9FBF2',
        accent2: '#D7F9FF',
        accent3: '#AFCBFF',
      },
    },
  },
  plugins: [],
}
