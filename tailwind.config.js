/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu Sans", "sans-serif"],
      sans: ["system-ui", "Roboto", "Arial"]
    },
  },
  plugins: [],
  darkMode: 'class'
}

