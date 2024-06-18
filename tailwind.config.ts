import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      red: {
        400: "#F84A3E",
        500: "#E91B0D",
        600: "#C20E02",
        700: "#921007",
      },
      sky: colors.sky,
      zinc: colors.zinc,
      green: {
        500: "#319C4C",
        600: "#28873F",
      },
      orange: {
        400: "#FCC551",
        500: "#FB9900",
      },
      blue: {
        200: "#ECF6FD",
        500: "#1272D1",
        600: "#1358B3",
        700: "#0D2E79",
      },
      basics: {
        ink: "#1C1E23",
        secondary: "#606268",
      },
      neutral: {
        100: "#F6F8F9",
        200: "#F6F8F9",
        300: "#E1E4E9 ",
        400: "#CED6DF",
        500: "#9FAABD",
        600: "#8597AF",
        700: "#5A6D88",
        800: "#4A5A70",
        900: "#323D4C",
      },
      purple: {
        400: "#9081DA",
        500: "#7767CE",
      },
    },
    fontSize: {
      h1: "6rem",
      h2: "3.75rem",
      h3: "3rem",
      h4: "2rem",
      h5: "1.5rem",
      h6: "1.25rem",
      "subtitle-md": "1rem",
      "subtitle-sm": "0.875rem",
      "body-md": "1rem",
      "body-sm": "0.875rem",
      caption: "0.75rem",
      button: "0.875rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
