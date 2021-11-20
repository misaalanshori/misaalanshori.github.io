module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
    safelist: [/bg-[a-z]+-400/, /ring-[a-z]+-500/, /delay-[0-9]+/]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
