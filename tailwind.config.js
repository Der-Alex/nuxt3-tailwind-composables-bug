const plugin = require('tailwindcss/plugin');
const defaultColors = {
  blue: {
    100: '#247ba0',
    200: '#1d3461',
  },
  red: {
    100: '#fb3640',
  },
  grey: {
    100: '#eeeeee',
    200: '#555555',
  },
};
module.exports = {
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}'],
  theme: {
    colors: {
      ...defaultColors,
      primary: defaultColors.blue['100'],
      secondary: defaultColors.red['100'],
      alternative: defaultColors.grey['100'],
    },
  },
};
