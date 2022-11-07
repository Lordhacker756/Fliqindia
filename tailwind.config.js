/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {
      colors: {
        textBlue: "rgb(var(--text-blue))",
        textBlueBlack: "rgb(var(--text-blue-black))",
        textBlack: "rgb(var(--text-black))",
      },
    },
  },
  plugins: [],
};
