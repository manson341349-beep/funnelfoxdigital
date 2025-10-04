import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { primary: "#ff6817" } } },
  plugins: []
};
export default config;