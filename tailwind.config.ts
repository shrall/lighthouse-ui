import type { Config } from 'tailwindcss';

import { default as stylesPlugin } from './lib/stylesPlugin';

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/components/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [stylesPlugin],
} satisfies Config;

export default config;