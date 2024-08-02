/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        150: "1.5",
        200: "2",
        300: "3",
      },
      screens: {
        xs: "480px",
        "3xl": "1920px",
        "4xl": "2560px",
        "2xl": "1536px",
        xlg: "1200px",
        "2md": "820px",
      },
    },
  },
  plugins: [],
};
