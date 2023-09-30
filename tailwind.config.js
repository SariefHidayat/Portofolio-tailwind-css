/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#3730a3",
        secondary: "#78716c",
        dark: "#1e293b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
