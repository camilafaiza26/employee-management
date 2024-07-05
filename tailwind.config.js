/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
    "./node_modules/flowbite/**/*.js" 
  ],
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#E3F2FD",
          "100": "#BBDEFB",
          "200": "#90CAF9",
          "300": "#64B5F6",
          "400": "#42A5F5",
          "500": "#2196F3",
          "600": "#0070C8",
          "700": "#1976D2",
          "800": "#1565C0",
          "900": "#0D47A1",
          "950": "#0A357A"
        }
      }, 
   
    },
    
    fontFamily: {
      'body': [
    'Raleway', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Raleway', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }

}

