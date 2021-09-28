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
      swadeshGrey: {
        DEFAULT: "#F5F3F0",
      },
      swadeshBgGreen: {
        DEFAULT: "#032C28",
      },
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
    extend: {
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
