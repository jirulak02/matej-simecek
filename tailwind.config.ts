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
        white: "rgb(var(--white))",
        black: "rgb(var(--black))",
        "primary-dark": "rgb(var(--primary-dark))",
        "primary-light": "rgb(var(--primary-light))",
      },
    },
  },
  plugins: [],
};
export default config;
