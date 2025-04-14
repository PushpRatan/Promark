/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#FE5000',
        dark: '#1E1E1E',
        'dark-gray': '#707070',
        'light-gray': '#DADADA',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
};
