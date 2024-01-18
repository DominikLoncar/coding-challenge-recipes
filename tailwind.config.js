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
        'athens-gray': '#E3E5E8',
        'light-gray': '#F4F5F6',
        'dark-gray': '#647181',
        'river-bed': '#44505F',
        'midnight-blue': '#080F1D',
        porcelain: '#F4F5F6',
        aluminium: '#AAB1BB',
        'light-green': '#15C421',
        green: '#0D9858',
        'dark-green': '#089B12',
        'light-blue': '#E6EEFE',
        'dark-blue': '#2851A3',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
