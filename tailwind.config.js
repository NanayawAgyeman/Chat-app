/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        '130' : "600px"
      },
      width:{
        '100': "500px",
      },
      margin: {
        '120': "800px",
        '110': "400px",
      },
      colors: {
        solid: "#4EBC84",
        light: "#E8FAF6",
        line: "#EEEEEE",
        head: "#171C2D",
        para: "#77838F",
        title: "#1E2022",
        blog: "#D8D8D8",
        lit: "#EDF3FF",
        hero: "#57D382",
        paralax: "#979797",
      },
    },
  },
  plugins: [],
}
