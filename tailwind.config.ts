const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Activar dark mode si es necesario
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "sans-serif"], // Añadir la fuente Exo a Tailwind
      },
      colors: {
        background: "#1a1a1a",
        white: "#F5F5F5",
        yellow: "#FFC300",
        ...colors, // Incluye todos los colores predeterminados de Tailwind
      },
    },
  },
  plugins: [addVariablesForColors], // Incluir el plugin personalizado
};

function addVariablesForColors({ addBase, theme }: { addBase: any, theme: any }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = config;
