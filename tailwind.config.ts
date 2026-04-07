import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07111f",
        "bg-2": "#0a1526",
        "bg-3": "#10213a",
        text: "#f7faff",
        muted: "#aab8cb",
        ink: "#0f1828",
        "ink-soft": "#5a6a80",
        blue: "#61a8ff",
        "blue-2": "#2c70b8",
        "blue-3": "#8fd3ff",
        "blue-4": "#d8efff",
        "light-bg": "#f3f7fc",
        "light-panel": "#ffffff",
        line: "#223553",
        paper: "#f3f7fc",
        navy: "#07111f",
        teal: "#8fd3ff",
        gold: "#d8efff"
      },
      fontFamily: {
        sans: [
          "\"Satoshi\"",
          "\"Avenir Next\"",
          "\"Segoe UI\"",
          "\"Helvetica Neue\"",
          "sans-serif"
        ],
        display: [
          "\"Canela\"",
          "\"Iowan Old Style\"",
          "\"Palatino Linotype\"",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(4, 10, 21, 0.42)",
        card: "0 24px 64px rgba(6, 13, 24, 0.34)",
        glow: "0 0 0 1px rgba(143, 211, 255, 0.14), 0 18px 48px rgba(97, 168, 255, 0.18)",
        panel: "0 20px 60px rgba(7, 17, 31, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 10% 15%, rgba(97, 168, 255, 0.22), transparent 28%), radial-gradient(circle at 85% 12%, rgba(143, 211, 255, 0.16), transparent 24%), radial-gradient(circle at 50% 90%, rgba(44, 112, 184, 0.18), transparent 38%), linear-gradient(180deg, rgba(7, 17, 31, 0.98) 0%, rgba(10, 21, 38, 0.98) 40%, rgba(7, 17, 31, 1) 100%)",
        "light-sheen":
          "radial-gradient(circle at top left, rgba(97, 168, 255, 0.18), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(243, 247, 252, 0.92))"
      }
    }
  },
  plugins: []
};

export default config;
