const theme = require("./src/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": theme.lightGray,
        gray: theme.gray,
        "gray-dark": theme.darkGray,
        "gray-line": theme.grayLine,
        "gray-text": theme.grayText,
        "gray-title": theme.grayTitle,
        "add-button": theme.addButton,
        "add-button-hover": theme.addButtonHover,
        primary: theme.primary,
      },
      dropShadow: {
        "add-button": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        navbar: "0px -1px 4px 0px rgba(0, 0, 0, 0.20)",
      },
      screens: {
        md: "800px",
      },
    },
  },
  important: true,
  plugins: [],
};
