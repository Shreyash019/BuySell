/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '300px', 'max': '699px' },
        // => @media (min-width: 640px and max-width: 767px) { ... 
  
        'md':{
          'min': '700px', 'max': '899px'
        },
  
        'lg': { 'min': '900px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
      colors: {
        "red": "#ff0000",
        "navy" :"#000080",
        "navyLight": "#3366ff",
        "skyBlue": "#66ffff",
        "gold": '#ffd700',
        "brown": "#a52a2a",
        "logo": "#00ffff",
        "spinner": "#fff5cc",
        "logoText": "#00e6e6",
        "brownDark": "#511515",
        "subNav": "#ffd9b3",
        "sideNav": "#404040",
        "borderColor": "#f2f2f2",
        "btnTypeDef": "#d9d9d9",
        "btnTypeOne": "#ffbf00",
        "productBackground": "#f0f5f5",
        "showProductSold": "#99ffbb",
        "orderLink": "#33cccc",
        "footerBackground": "#1a1a1a",
        "comTitle": "#ffe0b3",
        "imgBgColor": "#4700b3",
        "imgBgColorHover": "#e6e6e6",
        "btnBgColorPrm": "#0000ff",
        "btnBgColorPrmHover": "#0000cc",
        "reviewCardBg": "#99bbff",
        "locTextColor": "#737373",
        "noCartBg": "#ff0066",
        "noCartBgHover": "#e6005c",
        "textGrayFrt": "#a6a6a6",
      }
    },
  },
  plugins: [],
}