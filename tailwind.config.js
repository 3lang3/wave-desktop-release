// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.js",
    "./docs/**/*.ts",
    "./docs/**/*.vue",
    "./docs/**/*.md",
  ],
  options: {
    safelist: ["html", "body"],
  },
};