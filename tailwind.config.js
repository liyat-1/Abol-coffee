/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
        dark: "#1e1e1e",
        light: "#f5f5f5",
        simint:"#E4E0E1",
        choco:"#D6C0B3",
        mocho:"#AB886D",
        brown:"#493628",
        smoke:"#F3F4ED",
        silver:"#F3EEEA",
        b1:"#E5890A",
        b2:"#9D5C0D",
        b3:"#D18215"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
