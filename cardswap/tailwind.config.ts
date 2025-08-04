/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        bg: "#F0F0F0",
        whiteCustom: "#F3F3F3",
        blackCustom: "#313131",
        grayCustom: "#696969"
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px"
      }
    },
  },
  plugins: [],
};
