import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bluesBlue500: "#1272d1",
      bluesBlue600: "#1358b3",
      bluesBlue700: "#0d2e79",
      basicsInk: "#1b1e22",
      basicsSecondary: "#606268",
      basicsWhite: "#ffffff",
      systemColorsGreen400: "#319c4c",
      systemColorsGreen500: "#28873f",
      systemColorsOrange400: "#fcc551",
      systemColorsOrange500: "#fb9900",
      systemColorsRed400: "#f84a3e",
      systemColorsRed500: "#e91b0d",
      systemColorsRed600: "#c20e02",
      systemColorsRed700: "#921007",
      systemColorsPurple400: "#9081da",
      systemColorsPurple500: "#7767ce",
      neutralsNeutral100: "#f6f8f9",
      neutralsNeutral200: "#ecf0f4",
      neutralsNeutral300: "#e1e4e9",
      neutralsNeutral400: "#ced6df",
      neutralsNeutral500: "#9faabd",
      neutralsNeutral600: "#8597af",
      neutralsNeutral700: "#5a6d88",
      neutralsNeutral800: "#4a5a70",
      neutralsNeutral900: "#323d4c",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        "6xl": "6rem", // h1 font-size: 6rem
        "3xl": "3.75rem", // h2 font-size: 3.75rem
        "2xl": "3rem", // h3 font-size: 3rem
        xl: "2.125rem", // h4 font-size: 2.125rem
        lg: "1.5rem", // h5 font-size: 1.5rem
        base: "1.25rem", // h6 font-size: 1.25rem
        sm: "1rem", // subtitle-16, body-16 font-size: 1rem
        xs: "0.875rem", // subtitle-14, body-14, button-link font-size: 0.875rem
        xxs: "0.75rem", // caption-12 font-size: 0.75rem
      },
      fontWeight: {
        light: "300", // h1 font-weight: 300
        medium: "500", // h2, h3, h4, h5, h6, subtitle-14, button-link font-weight: 500
        regular: "400", // subtitle-16, body-16, body-14 font-weight: 400
      },
      lineHeight: {
        h1: "134px", // h1 line-height: 134px
        h2: "84px", // h2 line-height: 84px
        h3: "68px", // h3 line-height: 68px
        h4: "48px", // h4 line-height: 48px
        h5: "34px", // h5 line-height: 34px
        h6: "28px", // h6 line-height: 28px
        subtitle16: "22px", // subtitle-16 line-height: 22px
        subtitle14: "20px", // subtitle-14 line-height: 20px
        body16: "22px", // body-16 line-height: 22px
        body14: "20px", // body-14 line-height: 20px
        caption12: "16px", // caption-12 line-height: 16px
      },
      letterSpacing: {
        "-px1_5": "-1.5px", // h1 letter-spacing: -1.5px
        "-px0_5": "-0.5px", // h2 letter-spacing: -0.5px
        px0_25: "0.25px", // h4 letter-spacing: 0.25px
        px0_15: "0.15px", // h6 letter-spacing: 0.15px
        px0_5: "0.5px", // body-16 letter-spacing: 0.5px
        px0_4: "0.4px", // caption-12 letter-spacing: 0.4px
        px0_1: "0.1px", // subtitle-14 letter-spacing: 0.1px
      },
    },
  },
  plugins: [],
};
export default config;