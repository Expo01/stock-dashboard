/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: "white",
      none: "none",
    },
    borderwidth: {
      1: "1px",
    },
    fontFamily:{
      quicksand:["Quicksand", "sand-serif"],
    },
    gridTemplateRows : {
      7 : "repeat(7, (minMax(0,1fr))" ,
      8 : "repeat(8, (minMax(0,1fr))" ,
    },
  },
  plugins: [],
}

