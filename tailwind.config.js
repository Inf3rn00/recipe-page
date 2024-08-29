/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "stone-100": "hsl(30, 54%, 90%)",
        "stone-150": "hsl(30, 18%, 87%)",
        "stone-600": "hsl(30, 10%, 34%)",
        "stone-900": "hsl(24, 5%, 18%)",
        "brown-800": "hsl(14, 45%, 36%)",
        "rose-800": "hsl(332, 51%, 32%)",
        "rose-50": "hsl(330, 100%, 98%)",
      },
      fontFamily: {
        "Young-serif": "'Young-Serif', serif",
        Outfit: "'Outfit', serif",
      },
      theme: {
        fontWeight: {
          semibold: "600",
          bold: "700",
        },
      },
    },
  },
  plugins: [],
};
