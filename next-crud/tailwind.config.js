/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{html,js}"],
    safeList: [
        /^bg-/,
        /^to-/,
        /^from-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
