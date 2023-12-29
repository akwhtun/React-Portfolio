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
        'dark-grayish-blue': '#34495e',
        'darker-grayish-blue': '#2c3e50',
        'light-hover-gray': '#3d5266',
        'light-gray': '#ecf0f1',
      },
    }, // You can add theme customizations here
  },
  

  plugins: [], // You can add plugins here if needed
};
