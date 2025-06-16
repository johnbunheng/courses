/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#5d60c1",
        dark: "#1e1e1e",
        light: "#f5f5f",
        "light-Blue": "#dbedf7",
      },
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
      },
      container:{
          center: true,
          padding:{
            DEFAULT: "1rem",
            sm: "4rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "10rem",
          },
      },
    },
  },
  plugins: [],
}