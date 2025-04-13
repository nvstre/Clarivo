/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: '#0e0e10', // almost black
          accent: '#f97316',     // orange like Whop
          foreground: '#ffffff', // white text
        }
      }
    },
    plugins: [],
  }
  