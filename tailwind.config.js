const colors = require('./colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    `./safelist.txt`,
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        white: colors.white,
        black: colors.black,
      },
    },
  },
  plugins: [],
}
