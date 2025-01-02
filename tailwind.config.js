
import daisyui from "daisyui";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },

      colors: {
        dark: "#000000", // black
        light: "#d4ebec", // white
      },
    },
  },

  fontFamily: {
    helvetica: ['Helvetica Neue', 'sans-serif'], // Add Helvetica Neue
  },
  plugins: [daisyui, flowbite.plugin(),],
};

