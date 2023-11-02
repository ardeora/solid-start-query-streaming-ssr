/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        segmentFadeIn: "fadeIn 1.5s ease-in-out forwards",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": {
            backgroundColor: theme("colors.orange.300"),
            color: theme("colors.orange.700"),
          },
          "100%": {
            backgroundColor: theme("colors.transparent"),
            color: theme("colors.gray.500"),
          },
        },
      }),
    },
  },
  plugins: [],
};
