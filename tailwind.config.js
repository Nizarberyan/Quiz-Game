/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#13141f",
          light: "#f7f7f7",
          ghost: {
            light: "#f9f9f9",
          },
        },
        dark: {
          primary: {
            dark: "#23242f",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

  darkMode: "class",
};
