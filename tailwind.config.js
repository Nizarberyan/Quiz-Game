/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/*.{html,js}"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],

  darkMode: "class",
};
