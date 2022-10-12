/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : theme => ({
        'dark-moderate-cyan' : 'var(--dark-moderate-cyan)' ,
        'dark-blue' : 'var(--dark-blue)' ,
        'yellow' : 'var(--yellow)' ,
        'dark-desaturated-cyan' : 'var(--dark-desaturated-cyan)' ,        
      }),
      backgroundImage : theme => ({
        'desktop-image-header':"url('../../images/desktop/image-header.jpg')" ,
      }),
      fontFamily : theme => ({
        'barlow': ['Barlow', 'sans-serif'] ,
        'fraunces': ['Fraunces', 'serif'] ,                
      }),
      textColor : theme => ({
        'dark-moderate-cyan' : 'var(--dark-moderate-cyan)' ,
        'dark-grayish-blue' : 'var(--dark-grayish-blue)' ,   
        'dark-grayish-blue' : 'var(--dark-grayish-blue)' ,   
        'dark-blue' : 'var(--dark-blue)' ,       
      }),
      textDecorationColor : theme => ({
        'soft-red' : 'var(--soft-red)' ,     
      }),
    },
  },
  plugins: [],
}
