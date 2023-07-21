import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#F8F4EB",
        "gray-50":"#EFE6E6",
        "gray-100":"#DFCCCC",
        "gray-500":"#5E0000",
        "primary-100":"#ffe1e0",
        "primary-300":"#ffa6a3",
        "primary-500":"#ff6b66",
        "secondary-400":"#ffcd58",
        "secondary-500":"#ffc132"

      },
      backgroundImage:(theme) => ({
        "gradient-yellowerd":"linear-grandient(90deg,#ff61a 0% #ffc837 100%)",
        "mobile-home":"url('./src/assets/p1.jpg')"
      }),
      //config font
      // fontFamily:
      // {
      //   dmsans: ["DM Sans","sans-serif"]
      // },
      content: {
        evoletitle: "url('./src/assets/p2.jpg')",
        evolvetext: "url('./src/assets/p1.jpg')",
      }
    },
    screens: {
      sx:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}