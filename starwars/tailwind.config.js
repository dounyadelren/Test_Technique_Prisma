module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "rgba(0,0,0,0)",
      white: "#fff",
    },
    screens: {
      'sm': { 'max': '375px' },
      'lg': { 'min': '376px', 'max': '1024px' },
    },
    extend: {
      // backgroundImage: { 'starwars': "url('/src/Assets/Assets/header.png')", }
    },
  },
  plugins: [],
}
