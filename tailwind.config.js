/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10243E",
        "ink-deep": "#0B1A2E",
        slate: "#5B6B7C",
        bronze: "#B8935B",
        "bronze-deep": "#96723F",
        cream: "#F8F6F1",
        paper: "#FFFFFF",
        line: "#E4E0D8",
      },
      fontFamily: {
        headline: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 36s linear infinite",
      },
    },
  },
  plugins: [],
};
