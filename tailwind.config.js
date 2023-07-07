/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      "background": "#323232",
      "subtle": "#3F3F3F",
      "white": "#FFFFFF",
    }
  },
  plugins: [],
}

