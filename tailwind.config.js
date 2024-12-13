/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      'xs': "550px", // [375px to 760px]
      'sm': "760px", // [760ppx to 1024px]
      'md': "1024px", // [1024px to 1336px]
      'lg': "1336px", // [1336px to 1600px]
      'xl': "1600px", // [1600px to 1920px]
      "2xl": "1920px", // [1920px to so on.]
    },
    extend: {
      screen:{
        'xs': "550px", // [375px to 760px]
      },
      colors: {
        ButtonGreen: "#2dc071",
        primaryGreen:"#23856d",
        iconsBlue: "#23a6f0",
        textCol: "#252b42"
      },
      fontFamily: {
        Montserrat :[ "Montserrat", "sans-serif","font-normal","non-italic"],
      },
    },
  },
  plugins: [],
}

