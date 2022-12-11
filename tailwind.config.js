/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            blue: "hsl(223, 87%, 63%)"
          },
          secondary: {
            paleBlue: "hsl(223, 100%, 88%)",
            lightRed: "hsl(354, 100%, 66%)"
          },
          neutral: {
            gray: "hsl(0, 0%, 59%)",
            veryDarkBlue: "hsl(209, 33%, 12%)"
          }
        }
      },
      fontFamily: {
        libreFranklin: "var(--font-libreFranklin)"
      }
    },
  },
  plugins: [],
}
