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
    }
  },
  plugins: [],
}

