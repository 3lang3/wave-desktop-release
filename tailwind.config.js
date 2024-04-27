// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./www/**/*.js",
    "./www/**/*.ts",
    "./www/**/*.vue",
    "./www/**/*.md",
  ],
  options: {
    safelist: ["html", "body"],
  },
};