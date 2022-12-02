/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7fce2",
          100: "#eaf2bc",
          200: "#dcea95",
          300: "#cde16c",
          400: "#c0d844",
          500: "#a7bf2c",
          600: "#819420",
          700: "#5c6a15",
          800: "#37400a",
          900: "#111600",
        },
      },
    },
  },
  plugins: [],
};
