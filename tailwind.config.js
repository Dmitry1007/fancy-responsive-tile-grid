/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "540px",
      md: "740px",
      // ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
