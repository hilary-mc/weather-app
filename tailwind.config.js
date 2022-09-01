/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "focus-color": "var(--focus-color)"
      }
    },
  },
  plugins: [],
}
