/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "create": "url('/public/wall.jpg')",
      },
    },
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      headx: ['Caveat'],
    },
    colors:{
      'white': '#ffffff',
      'black': '#000000',
      'discordpurple': {
        100: '#5964f2',
        200: '#3744f0',
        300: '#989ef5',
        400: '#d5d8fb',
      },
      'discordgreen': {
        100: '#46b866',
        200:'#3ba95a',},
      'dicordgreen1':{
        100:'329457',
        200:'258047',
      },
      'blue': {
        100: '#4c8aed',
        200: '#2563eb',
      },  
      'gray': {
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      'slate': {
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      'red': {700:'#b91c1c',},
      'yellow': '#ffff00',
      'green': '#00ff00',
      'blue': '#0000ff',
      'purple': '#800080',
      'cyan': '#00ffff',
      'magenta': '#ff00ff',
      'transparent': 'transparent',
      'current': 'currentColor',
      
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
