// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F0F0F0",
        whiteCustom: "#F3F3F3",
        blackCustom: "#313131",
        grayCustom: "#696969"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px"
      }
    }
  },
  plugins: []
};
