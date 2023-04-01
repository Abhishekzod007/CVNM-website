/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        primary: "#22aaee",
        secondary: "#55acdd",
        background: "#ffffff",
        foreground: "#5a6d7e",
        front: "#000000",
        back: "#ffffff",
        mute: "#adadad"
      },
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
    },
  },
  plugins: [],
}

