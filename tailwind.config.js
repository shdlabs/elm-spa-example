/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{elm,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        menu: "'Archivo', 'sans-serif'",
        rubik: "'Rubik', 'serif'",
        nunito: "'Nunito', 'sans-serif'",
      },
      container: {
        center: true,
      },
      colors: {
        primary: "hsl(var(--clr-primary))",
        background: "hsl(var(--clr-background))",
        "one-bg-before": "hsl(var(--ctr-one-bg-before))",
        "one-background": "hsl(var(--ctr-one-background))",
        "two-background": "hsl(var(--clr-two-background))",
        "intro-background": "hsl(var(--clr-intro-background))",
        icons: "hsl(var(--ctr-icons))",
      },
      boxShadow: {
        neon: "inset 0 0 0.5em 0 rgb(var(--color-neon)), 0 0 0.5em 0 rgba(var(--color-neon));",
        neonafter: "0 0 1rem 0.5rem rgba(var(--color-neon));",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
