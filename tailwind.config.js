const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#e7e7e9', 
        charcoal: '#2f2f2ffa',
        coolGray: '##9e9ea7',
        pink :'#ea4c89',
        slateGray:'#6e6d7a',
        royalBlue:'#336699',
        midnightBlue :'#0d0c22',
        black:'#000000',
       
      },
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
  ],
};