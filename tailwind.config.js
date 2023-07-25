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
        "add-button": theme.addButton,
        "add-button-hover": theme.addButtonHover,
      },
      dropShadow: {
        "add-button": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        navbar: "0px -1px 4px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
