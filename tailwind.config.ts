/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Add this to include the components folder
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
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      }
    },
  },
  plugins: [],
}
