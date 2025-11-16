import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#152731",
        secondary: "#ba9550",
        darkBg: "#0a0a0a",
      },
      spacing: {
        "screen": "100vh",
      },
    },
  },
  plugins: [],
};
export default config;
