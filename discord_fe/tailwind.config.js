/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  plugins: [],
};
