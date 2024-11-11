/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" ,
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Bebas Neue", 'sans-serif'],
        paragraph: ['Manrope', 'sans serif'],
        menu: ['inter', 'sans-serif']
      },
      colors:{
        greenColor: '#d2ea7b',
        grayColor: '#222222'
      }
    },
  },
  plugins: [],
}

