import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "sans-serif"], // Adding Exo font to Tailwind
      },
      colors: {
        background: "#1a1a1a",
        white: "#F5F5F5",
        yellow: "#FFC300",
      },
    },
  },
  plugins: [],
};
export default config;
