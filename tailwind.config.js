/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "#f9f9f9",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimPurple: "#40196d",
        textColor: "#979797",
        offBlue: "#eff1ff",
        offGreen: "rgba(72,211,138,0.5)",
        successColorTans: "#dcffec",
        bgOffset: "#f4f4f4",
        lightBlue: "#1dcbef",
        successColor: "#48d38a",
        negativeColor: "#f7685b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
}
