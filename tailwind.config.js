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
      },
      backgroundImage: {
        'grid-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
      },
      backgroundPosition: {
        '10-10': '10px 10px'
      }
    },
  },
  plugins: [],
}
