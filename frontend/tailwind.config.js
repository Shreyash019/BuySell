/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '300px', 'max': '599px' },
        // => @media (min-width: 640px and max-width: 767px) { ... 
  
        'md':{
          'min': '600px', 'max': '850px'
        },
  
        'lg': { 'min': '951px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
      colors: {
        "subNav": "#ffe0b3",
        "sideNav": "#404040",
        "borderColor": "#f2f2f2",
        "productBackground": "#f0f5f5",
        "showProductSold": "#00ff00"
      }
    },
  },
  plugins: [],
}