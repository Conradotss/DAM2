/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
}

