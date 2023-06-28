const path = require('path');

const isDev = process.env.HUGO_ENVIRONMENT !== 'production';

module.exports = {
  // plugins: {
  //   tailwindcss: {
  //     config: path.join(__dirname, '/tailwind.config.js')
  //   },
  //   autoprefixer: {},

  // },
  plugins: !isDev ? [
    require('tailwindcss')({
      config: path.join(__dirname, '/tailwind.config.js')
    }),
    require('autoprefixer')({}),
    require('postcss-import')({}),
  ] : [
    require('tailwindcss')({
      config: path.join(__dirname, '/tailwind.config.js')
    })
  ]
}
