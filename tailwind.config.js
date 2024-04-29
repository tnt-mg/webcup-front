/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "double-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
        "bounce-rotation": {
          "0%,100%": {
            transform: "rotate(0deg)",
          },
          "33%": {
            transform: "rotate(20deg)",
          },
          "66%": {
            transform: "rotate(-20deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  presets: [require("xtendui/tailwind.preset")],
}
