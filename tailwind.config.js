module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
        ]
      },
      fontSize: {
        xxs: '10px'
      },
      maxWidth: {
        '800': '832px'
      },
      colors: {
        secondary: '#687076'
      }
    },
  },
  plugins: [],
}
