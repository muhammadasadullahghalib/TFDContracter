/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 50px -30px rgba(14, 42, 34, 0.35)",
      },
    },
  },
  plugins: [],
};
