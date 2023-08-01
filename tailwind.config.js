/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern-circles': "url('/src/assets/home/desktop/pattern-circles.svg')",
      }),
      backgroundPosition: {
        'center-top': '-200px top',
        'center-center': 'center center',
        'center-bottom': 'center bottom',
      },
    },
  },
  plugins: [],
}