/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      height: {
        147: "9.1875rem",
        430: "26.875rem",
        149: "9.3125rem",
        308: "19.25rem",
        371: "23.1875rem",
        94: "5.875rem",
      },
      width: {
        562: "35.125rem",
        366: "22.875rem",
        293: "18.3125rem",
        546: "34.125rem",
        553: "34.5625rem",
        256: "15.875rem",
        786: "49.125rem",
      },
      translate: {
        negH: "-50%",
      },
    },
    colors: {
      "red-primary": "#C70000",
      "red-dark": "#940034",
      "green-primary": "#13B537",
      red: "#C70000",
      white: "#FFFFFF",
      black: "#000000",
      beige: "#F9F6EE",
      burgundy: "#940034",
      green: "#13B537",
      "gray-primary": "#2C2C2C",
      "gray-secondary": "#4E4E4E",
      "gray-tertiary": "#898989",
      "menu-background": "#fff",
    },
  },
  plugins: [],
};
