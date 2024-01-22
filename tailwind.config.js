/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f6f6ff",
          200: "#e3e3e3",
        },
        secondary: {
          100: "#4a63e7",
          200: "#4a64e7cf",
        },
        tertiary: {
          100: "#ff5959",
        },
      },
    },
  },
  plugins: [],
};
