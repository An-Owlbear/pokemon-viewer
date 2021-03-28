module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['bg-hp', 'bg-attack', 'bg-defense', 'bg-special-attack', 'bg-special-defense', 'bg-speed']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hp': '#FF5959',
        'attack': '#F5AC78',
        'defense': '#FAE078',
        'special-attack': '#9DB7F5',
        'special-defense': '#A7DB8D',
        'speed': '#FA92B2'
      }
    },
    minWidth: {
      '96': '24rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
