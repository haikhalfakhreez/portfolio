const defaultTheme = require('tailwindcss/defaultTheme')

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
          ...defaultTheme.fontFamily.sans
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
        'grid-image': `url("/grid.svg")`
      },
      backgroundPosition: {
        '10-10': '10px 10px'
      }
    },
  },
  plugins: [],
}
