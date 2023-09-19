import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(245, 245, 245)",
        "primary-light": "#00A1C1",
        "primary-dark": "#0A2D4D",
      },
    },
  },
  plugins: [],
};
export default config;
