/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0A0A',
        'secondary': '#1A1A1A',
        'accent': '#6366F1',
        'text': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 