import type { Config } from 'tailwindcss'

export default {
  darkMode: "class",
  content: ["**.html"],
  theme: {
    extend: {
      fontFamily: {
        "overpass": "Overpass, sans-serif"
      },
      colors: {
        grayish: {
          50: "#F9FAFB",
          100: "#EAEBED",
          200: "#C7CCD3",
          300: "#A4ABBB",
          400: "#2F2B2F",
          500: "#181618",
          black: "#0d0c0f",
        }
      }
    },
  },
  plugins: [],
} satisfies Config

