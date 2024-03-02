/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",
      },
    },
    colors: {
      custgreen: "#00DFA2" /*"#45CFDD" F3FDE8  */,
      lightcustgreen: "#28FFBF  " /*99FFCD 98EECC*/,
      white: "#FFFFFF " /*FBF9F1*/,
      slate: "#cbd5e1",
      yellow: "#F8E559",
      black: "#000000",
      lightpurple: "#DFCCFB " /*B2A4FF*/,
      green: "#16a34a",
      red: "#ef4444",
      gray: "#374151",
      lightgray: "#e5e7eb",
      minimalgray: "#f3f4f6",
      graymid: "#d1d5db",
      pentgray: "#6b7280",
      minimalgreen: "#99f6e4" /*#ccfbf1  #99f6e4  #5eead4*/,
      teal: "#ccfbf1",
    },
  },
  plugins: [],
};
