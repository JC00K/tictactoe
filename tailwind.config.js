import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{vue.js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lobster', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
