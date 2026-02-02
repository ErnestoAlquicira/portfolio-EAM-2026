/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
   extend: {
   fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        serifDisplay: ['"DM Serif Display"', 'serif'],
      },
}
  },
  plugins: [],
}

