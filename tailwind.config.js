/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui", "sans-serif"],
      display: ["Space Grotesk", "Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          navy: "#0f172a",
          ink: "#111827",
          green: "#0ea5e9",
          teal: "#10b981",
          gray: "#6b7280",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 40px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        underline: "underline 0.4s ease forwards",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
