/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        'rsaBrand': '#5C1380',
        'rsaAccent': '#D4007F',
      },
    },
  },
  plugins: [],
}

