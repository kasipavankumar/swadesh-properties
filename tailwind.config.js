const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      royalGreen: {
        DEFAULT: "#0F524B",
      },
      royalGoldenYellow: {
        DEFAULT: "#CB912C",
      },
    },
    fontFamily: {
      sans: ["THICCCBOI", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
