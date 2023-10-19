/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / .2)",
      brand: "var(--my-brand-color)",
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--my-brand-color": "red",
          "--color-primary": "33 134 229",
        },
      }),
  ],
};
