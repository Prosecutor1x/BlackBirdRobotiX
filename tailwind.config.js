/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "Sans-Serif"],
      },
      fontSize: {
        xs: "10px",
        sx: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "1.5xl": "24px",
        "5xl": "64px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "60px",
        "6xl": "72px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1108px",
        xl: "1224px",
        "2xl": "1370px",
      },
      colors: {
        grey: "#18181C",
        white: "#FFFFFF",
        light_grey: "#9E9E9E",
        lightpink: "#F3EFFF",
        purple: "#8054FF",
        hotPink: "#FF9898",
        skin: "#FFECEF",
        font1: "#374151",
        font2: "#44476A",
        blue: "#0000FF",
      },
    },
  },
  plugins: [],
};
