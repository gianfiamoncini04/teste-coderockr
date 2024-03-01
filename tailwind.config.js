/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'Arial']
    },
    extend: {
      keyframes: {
        'open-menu': {
          '0%': {transform: 'translateX(300px)'},
          '100%': {transform: 'translateX(0px)'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out',
      }
    }
  },
  plugins: [],
}

