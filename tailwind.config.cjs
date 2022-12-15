const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        "sans": ["Strawford", { fontFeatureSettings: '"tnum", "lnum", "salt", "ss01"' }, ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: []
};

module.exports = config;
