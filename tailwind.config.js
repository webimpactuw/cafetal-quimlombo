/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      visibility: ['group-hover'],
      height: {
        '147': '9.1875rem',
        '430': '26.875rem',
        '149': '9.3125rem',
        '308': '19.25rem',
        '371': '23.1875rem',
        '94': '5.875rem'
      },
      width: {
        '562': '35.125rem',
        '366': '22.875rem',
        '293': '18.3125rem',
        '546': '34.125rem',
        '553': '34.5625rem',
        '256': '15.875rem',
        '786': '49.125rem'
      },
      translate: {
        'negH': '-50%'
      }
    },
    colors: {
      red: "#C70000",
      beige: "#F9F6EE",
      burgundy: "#940034"
    }
  },
  plugins: [],
}

