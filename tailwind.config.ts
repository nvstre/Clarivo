/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/styles/globals.css", // Make sure globals.css is included
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',    // White background
        foreground: '#0E1C36',    // Dark blue text
        accent: '#F97316',        // Orange accent (similar to Whop)
        muted: '#F9FBF2',         // Light off-white
        lightCyan: '#D7F9FF',     // Light cyan
        softBlue: '#AFCBFF',      // Soft blue
      },
    },
  },
  plugins: [],
}
