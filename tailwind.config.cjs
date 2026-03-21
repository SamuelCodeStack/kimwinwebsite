/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Professional Blue Palette
        brand: {
          deep: "#1e3a8a", // blue-900 (Primary)
          light: "#60a5fa", // blue-400 (Accent)
          soft: "#eff6ff", // blue-50 (Backgrounds)
          dark: "#0f172a", // slate-900 (Dark Mode)
        },
      },
    },
  },
  plugins: [],
};
