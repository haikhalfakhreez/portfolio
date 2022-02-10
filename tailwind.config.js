const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? 'jit' : undefined,
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
        'grid-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
      },
      backgroundPosition: {
        '10-10': '10px 10px'
      }
    },
  },
  plugins: [],
}
