import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        birthstone: ['"Birthstone Formal"', 'cursive'], // Birthstone Formal font
        greatvibes: ['"Great Vibes"', 'cursive'], // Adding Great Vibes font
      },
    },
  },
  plugins: [],
};

export default config;
