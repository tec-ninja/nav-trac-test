module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      width: {
        'fit': 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}