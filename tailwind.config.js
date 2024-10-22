/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      Inter:["Inter", 'sans-serif'],
      Poppins:['Poppins',' sans-serif'],
      Salsa:['Salsa', 'cursive'],
      Teko:['Teko', 'sans-serif'],
      Agbalumo:[ 'Agbalumo',' system-ui'],
      ChakraPetch:['Chakra Petch', 'sans-serif'],
      Lobster:['Lobster', 'sans-serif'],
      LobsterTwo:['Lobster Two', 'sans-serif'],
      RobotoSlab:['Roboto Slab', 'sans-serif'],
      Roboto:["Roboto", 'sans-serif'],
      Oswald: ["Oswald", 'sans-serif'],
      SourceCode: ["Source Code Pro", 'monospace']
    },
    
    extend: {
      fontSize:{
        'clamp-h2':"clamp(1.6rem,2vw,2.5rem)",
      }
    },
  },
  plugins: [],
}