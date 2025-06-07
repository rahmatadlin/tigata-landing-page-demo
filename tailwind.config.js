/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "slateblue": {
            "100": "#3047bb",
            "200": "#2e47ba"
          },
          "white": "#fff",
          "black": "#000",
          "dimgray": "#4f5e71",
          "darkslategray": "#203551",
          "whitesmoke": {
            "100": "#f5f6f6",
            "200": "#f4f4f4",
            "300": "#e8edf1"
          },
          "gray": "#252a31",
          "darkslateblue": "#2f3362",
          "lightsteelblue": "#a9b8cb",
          "gainsboro": "#dee4eb"
          },
        fontFamily: {
          "open-sans": ["Open Sans", "sans-serif"],
          "basis-grotesque-pro": "Basis Grotesque Pro",
          "inter": "Inter"
        }
      }
    },
    corePlugins: {
      preflight: false
    }
  }
  