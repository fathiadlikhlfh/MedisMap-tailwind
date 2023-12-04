/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        dark: "#03121A",
        yellow: "#FF9F1C",
        bluetwitter: "#1DA1F2",
        royalblue: "#405DE6",
        bluefacebook: "#4267B2",
      },
    },
  },
  plugins: [],
};
