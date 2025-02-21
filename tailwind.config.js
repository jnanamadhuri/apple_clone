/** @type {import('tailwindcss').Config} */
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};

// Export Sentry Plugin separately for use in `vite.config.js`
export const sentryPlugin = sentryVitePlugin({
  org: import.meta.env.VITE_SENTRY_ORG,
  project: import.meta.env.VITE_SENTRY_PROJECT,
  authToken: import.meta.env.VITE_SENTRY_AUTH_TOKEN,
  include: "./dist",
  ignore: ["node_modules", "webpack.config.js"],
});
