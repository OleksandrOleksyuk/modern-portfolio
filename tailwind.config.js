/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts", "./index.html"],
  theme: {
    extend: {
      colors: {
        "white-primary": "#F0F2F5",
        "white-secondary": "#FFF",
        "black-primary": "#161513",
        "black-secondary": "#1C1C22",
      },
    },
  },
  plugins: [],
};
