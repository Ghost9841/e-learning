 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          poppins: ["Poppins","sans-seif"],
        },
        colors:{
          primary: "#f7ba34",
          secondary:"#69a79c",
          light:"#f7f7f7",
          dark:"333333",
          dark2:"999999",
        }
      },
    },
    plugins: [],
  }