/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        "main-color" : "#020204",
        "sec-color" : "hsla(241, 100%, 71%, .5)",
        "bg-circle" : "hsla(241, 100%, 71%, .4)",
        "companies-circle" : "hsla(241, 100%, 71%, .3)"
      }
    },
  },
  plugins: [],
}

