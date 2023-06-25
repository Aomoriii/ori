/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, 'layout/**/*.html'),
    path.join(__dirname, '/layouts/*.html'),
    path.join(__dirname, '/assets/js/*.js')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

