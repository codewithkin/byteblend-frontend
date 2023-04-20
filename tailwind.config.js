/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ncs": "#2e86ab"
      },
      boxShadow: {
        "3xl": "10px 10px 20px "
      }
    },
  },
  plugins: [],
}

