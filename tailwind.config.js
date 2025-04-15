/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#F86323',
        dark: '#262626',
        'dark-font': '#151419',
        'dark-gray': '#878787',
        'light-gray': '#D8D8D8',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
};
