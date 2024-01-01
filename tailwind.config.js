module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],

  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'], 
      'montserrat': ['Montserrat', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors: {
        'background-color': '#282a36',
        'background-hover': '#44475a',
        'btn-color' : '#2a0a2d',
        'btn-hover': '#371040',
        'light-gray': '#f8f8f2',
      },
    }, // You can add theme customizations here
  },
  

  plugins: [], // You can add plugins here if needed
};
