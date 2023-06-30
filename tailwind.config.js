/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, '/layouts/**/*.html'),
    path.join(__dirname, '/layouts/*.html'),
    path.join(__dirname, '/assets/js/*.js')
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green-bg': '#F4F5F4',
      'banner': '#96A49B',
      'foot-1': '#9AADA1',
      'foot-2': 'rgb(158 175 164 / 64%)',
      'foot-3': 'rgb(164 182 170 / 26%)',
      'tree-body': '#6E7B72',
      'tree-root': '#657A6C',
      'menu': '#727272',
      'white': '#FFFFFF'

    }
  },
  plugins: [],
}

