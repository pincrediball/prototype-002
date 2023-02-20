/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        firm: ['0 15px 15px rgba(0, 0, 0, 0.25)', '0 20px 25px rgba(0, 0, 0, 0.15)'],
      },
    },
  },
  plugins: [],
};
