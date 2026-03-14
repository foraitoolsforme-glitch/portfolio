/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006064', // Deep Teal
        secondary: '#E0F2F1', // Mint Mist
        accent: '#FF7043', // Coral
      }
    },
  },
  plugins: [],
};
