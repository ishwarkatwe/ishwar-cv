import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#e5f2f9",
          "100": "#beddf1",
          "200": "#98c9e8",
          "300": "#75b4de",
          "400": "#5da4d8",
          "500": "#4996d2",
          "600": "#4088c6",
          "700": "#3777b4",
          "800": "#2f67a2",
          "900": "#224a82",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
