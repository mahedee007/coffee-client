/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav' : "url('./src/images/more/15.jpg')",
        'hero': "url('./src/images/more/3.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
