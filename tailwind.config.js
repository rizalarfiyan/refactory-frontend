module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
  theme: {
    container: {
      center: true,
      screens: {
        sm: 'calc(100% - 40px)',
        md: 'calc(100% - 40px)',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
