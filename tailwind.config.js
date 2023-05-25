/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing : {
        '128' : '38rem',
      },
      fontFamily : {
        'stargaze' : ['Stargaze','cursive'],
        'stencil' : ['Stargazes','cursive'],
        'titillium' : ['Titillium','sans-serif'],
        'orbitron' : ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

