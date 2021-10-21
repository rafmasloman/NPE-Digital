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
        // * Warna gray untuk digunakan pada text secondary
        gray: {
          text: "#B7B7B7",
        },
      },
      //* Font dari google font, font primary untuk text berupa headline dan secondary untuk text secondary
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        secondary: ["Nunito", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "6.5xl": "4rem",
      },
      padding: {
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      margin: {
        12.5: "3.125rem",
        17.5: "4.375rem",
        7.5: "1.875rem",
        16.5: "4.375rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        "primary-btn": "0 5px 20px rgba(2, 108, 255, 0.3)",
      },
      width: {
        12.5: "3.125rem",
        72.5: "18.75rem",
      },
      height: {
        0.9: "0.9px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
