import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        surface: "var(--surface-panel)",
        "surface-elevated": "var(--surface-elevated)",
        parchment: "var(--text-main)",
        "muted-silver": "var(--text-muted)",
        "border-subtle": "var(--border-subtle)",
        "acid-lime": "var(--accent-acid)",
        "ochre-warm": "var(--accent-ochre)",
        "titanium-raw": "var(--accent-titanium)",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
