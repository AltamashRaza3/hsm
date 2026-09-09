/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070E17",
          900: "#0B1420",
          800: "#101C2B",
          700: "#182A3E",
          600: "#223B54",
        },
        green: {
          DEFAULT: "#1F7A4D",
          600: "#1B6B43",
          500: "#1F7A4D",
          400: "#2C9660",
          hi: "#9ADB3C",
        },
        charcoal: "#1B1F24",
        stone: {
          50: "#F6F7F7",
          100: "#EEF0F1",
          300: "#C8CED3",
          500: "#6E7A85",
          700: "#454E56",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
