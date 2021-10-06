module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#006CE2",
          secondary: "#113466",
        },
      },
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        secondary: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
