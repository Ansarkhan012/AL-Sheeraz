/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16A34A', // Green
        secondary: '#000000', // Black
        accent: '#FFFFFF', // White
        'islamic-green': '#16A34A',
        'soft-gray': '#F3F4F6',
      },
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/islamic-pattern.png')", // Placeholder for now
      }
    },
  },
  plugins: [],
}

