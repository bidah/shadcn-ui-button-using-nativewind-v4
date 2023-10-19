/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      background: "rgb(var(--background))",
      foreground: "rgb(var(--foreground))",
      muted: "rgb(var(--muted))",
      mutedForeground: "rgb(var(--muted-foreground))",
      popover: "rgb(var(--popover))",
      popoverForeground: "rgb(var(--popover-foreground))",
      border: "rgb(var(--border))",
      input: "rgb(var(--input))",
      card: "rgb(var(--card))",
      cardForeground: "rgb(var(--card-foreground))",
      primary: "rgb(var(--primary))",
      primaryForeground: "rgb(var(--primary-foreground))",
      secondary: "rgb(var(--secondary))",
      secondaryForeground: "rgb(var(--secondary-foreground))",
      accent: "rgb(var(--accent))",
      accentForeground: "rgb(var(--accent-foreground))",
      destructive: "rgb(var(--destructive))",
      destructiveForeground: "rgb(var(--destructive-foreground))",
      ring: "rgb(var(--ring))",
      radius: "rgb(var(--radius))",
    },
    // extend: {
    //   colors: {
    //     border: "rgb(var(--border))",
    //     input: "rgb(var(--input))",
    //     ring: "rgb(var(--ring))",
    //     background: "rgb(var(--background))",
    //     foreground: "rgb(var(--foreground))",
    //     primary: {
    //       DEFAULT: "rgb(var(--primary))",
    //       foreground: "rgb(var(--primary-foreground))",
    //     },
    //     secondary: {
    //       DEFAULT: "rgb(var(--secondary))",
    //       foreground: "rgb(var(--secondary-foreground))",
    //     },
    //     destructive: {
    //       DEFAULT: "rgb(var(--destructive))",
    //       foreground: "rgb(var(--destructive-foreground))",
    //     },
    //     muted: {
    //       DEFAULT: "rgb(var(--muted))",
    //       foreground: "rgb(var(--muted-foreground))",
    //     },
    //     accent: {
    //       DEFAULT: "rgb(var(--accent))",
    //       foreground: "rgb(var(--accent-foreground))",
    //     },
    //     popover: {
    //       DEFAULT: "rgb(var(--popover))",
    //       foreground: "rgb(var(--popover-foreground))",
    //     },
    //     card: {
    //       DEFAULT: "rgb(var(--card))",
    //       foreground: "rgb(var(--card-foreground))",
    //     },
    //   },
    // },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--background": "255 255 255",
          "--foreground": "15 23 42",
          "--muted": "241 245 249",
          "--muted-foreground": "100 116 139",
          "--popover": "255 255 255",
          "--popover-foreground": "15 23 42",
          "--border": "226 232 240",
          "--input": "226 232 240",
          "--card": "255 255 255",
          "--card-foreground": "15 23 42",
          "--primary": "15 23 42",
          "--primary-foreground": "248 250 252",
          "--secondary": "241 245 249",
          "--secondary-foreground": "15 23 42",
          "--accent": "241 245 249",
          "--accent-foreground": "15 23 42",
          "--destructive": "255 0 0",
          "--destructive-foreground": "248 250 252",
          "--ring": "148 163 184",
          "--radius": "0.5rem",
        },
      }),
  ],
};
