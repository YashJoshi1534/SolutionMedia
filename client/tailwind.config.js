/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'rgb(var(--primary-bg) / <alpha-value>)',
        'accent-orange': 'rgb(var(--accent-orange) / <alpha-value>)',
        'secondary-bg': 'rgb(var(--secondary-bg) / <alpha-value>)',
        'dark-green': 'rgb(var(--dark-green) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
