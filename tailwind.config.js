module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        betcity: {
          blue: '#060322',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        comforter: ['Patrick Hand'],
        garamond: ['EB Garamond', 'serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
