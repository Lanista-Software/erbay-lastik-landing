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
        '2xl': '1440px',
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        warning: colors.warning,
        white: colors.white,
        black: colors.black,
      },
    },
  },
  plugins: [],
}
