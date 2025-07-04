/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        hedvig: ['Hedvig Letters Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

