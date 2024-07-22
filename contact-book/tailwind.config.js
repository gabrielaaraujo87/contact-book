/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleLight: '#E9D8FD',
        purpleDark: '#6B46C1',
        purpleDarker: '#44337A',
      },
    },
  },
  plugins: [],
}