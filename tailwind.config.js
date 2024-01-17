/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        gray: '#AAB1BB',
        'light-gray': '#F4F5F6',
        'dark-gray': '#647181',
        'midnight-blue': '#080F1D',
        porcelain: '#F4F5F6',
        aluminium: '#AAB1BB',
        'dark-green': '#089B12',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
