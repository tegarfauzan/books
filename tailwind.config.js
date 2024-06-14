/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max805': {'max': '805px'},
        'min806': {'min': '806px'},
        'min1005': {'min': '1005px'},
      },
      fontFamily:{
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

