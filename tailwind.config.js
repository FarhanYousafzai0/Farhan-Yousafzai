/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if you have different folders
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F9E99",    // Example custom color
        secondary: "#EFE9E0",  // Light background shade
        dark: "#0A0A0A",       // Custom dark
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}
