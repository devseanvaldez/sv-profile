/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        teal: "#049cb7",
        bromhead: "#017dc3",
        sagegreen: {
          100: "#94A69F",
          400: "#738678",
          500: "#48685c",
          600: "#4a6c58",
          900: "#183228",
        },
        dustyblue: "#4F6F8C",
        "custom-gray": {
          900: "#181818",
        },
      },
      container: {
        center: true,
      },
      backgroundImage: {
        texture: "url('/images/texture.jpg')",
        myphoto: "url('/images/sv.jpg')",
        contact: "url('/images/contact.jpg')",
        contact2: "url('/images/contact2.webp')",
        ourphoto: "url('/images/sv1.jpg')",
      },
    },
  },
  plugins: [],
};
