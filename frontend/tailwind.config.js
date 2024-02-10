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
    // colors: {
    //   retrogreen: "#764AF1" /*87A2FB*/,
    // },
  },
  plugins: [],
};
