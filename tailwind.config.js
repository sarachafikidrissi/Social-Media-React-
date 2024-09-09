const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#e7e7e9', 
        charcoal: '#2f2f2ffa',
        coolGray: '#9e9ea7',
        pink :'#ea4c89',
        slateGray:'#6e6d7a',
        royalBlue:'#336699',
        midnightBlue :'#0d0c22',
        black:'#000000',
        btnColor: '#8b4f99',
        hoverBtn: '#db84b9'
        
       
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/login-bg.jpg')",
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        slideOutLeft: 'slideOutLeft 0.5s ease-in forwards',
        slideOutRight: 'slideOutRight 0.5s ease-in forwards',
      },
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
  ],
};