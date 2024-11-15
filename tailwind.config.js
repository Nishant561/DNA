/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "--green-color":"var(--green-color)",
        "--red-color":"var(--red-color)",
      },
      
    },
  },
  plugins: [
    "tailwindcss: {}",
    "autoprefixer: {}",

  ],

}

