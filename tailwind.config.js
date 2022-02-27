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
          cyan: '#00f5ff',
        },
      },
      fontFamily: {
        comforter: ['Patrick Hand'],
        serif: ['ui-serif', 'Georgia'],
        garamond: ['EB Garamond', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'],
        spartan: ['League Spartan', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
