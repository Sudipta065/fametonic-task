const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', ...fontFamily.sans],
        urbanist: ['Urbanist', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
