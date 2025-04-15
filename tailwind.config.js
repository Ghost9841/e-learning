/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // add jsx/ts if you're using React
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // fix typo: "sans-seif" → "sans-serif"
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
    },
  },
  plugins: [],
};
