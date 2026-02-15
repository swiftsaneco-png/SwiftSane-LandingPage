/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#072C50',
        gold: '#B88746',
        cream: '#FDF5A6',
        swiftsane: {
          navy: '#072C50',
          gold: '#B88746',
          cream: '#FDF5A6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
