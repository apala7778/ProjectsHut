/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A66EFC",
        secondary: "#000513",
        LightPrimary: "#ceb1fa",
        DarkPrimary: "#7d4ec7"
      },
       
      fontFamily: {
        stencil: ["Allerta Stencil", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};

// DONOT CHANGE THIS FILE
