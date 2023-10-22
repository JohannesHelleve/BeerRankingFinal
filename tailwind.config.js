/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        palett: {
          Paynes_gray: '#586F7C',
          Lighblue: '#B8DBD9',
          Ghost_white: '#F4F4F9',
          Dark_spring_green: '#04724D',
        },
      }
    },
  },
  plugins: [],
}

