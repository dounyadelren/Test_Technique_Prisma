module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "rgba(0,0,0,0.7)",
      white: "#fff",
    },
    screens: {
      'sm': { 'max': '375px' },
      'lg': { 'min': '376px', 'max': '1024px' },
    },
    fontSize: {
      sm: ['14px'],
      md: ['18px'],
      lg: ['32px'],
    },
    extend: {
      backgroundImage: { 'starwars': "url('/src/Assets/Assets/header-bg-2x.png')", }
    },
  },
  plugins: [],
}
