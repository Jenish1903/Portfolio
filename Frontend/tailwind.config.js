/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tame ahiya custom colors add kari sako cho
        'navy': '#0a192f',
        'light-navy': '#112240',
      }
    },
  },
  plugins: [],
}