const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {

    fontFamily: {
      sans: [
        "Inter, system-ui",
        { fontFeatureSettings: "\"calt\", \"case\", \"ss01\", \"ss03\", \"cv11\"" }
      ],
      display: [
        "Strawford, system-ui", { fontFeatureSettings: "\"tnum\", \"lnum\", \"salt\", \"ss01\"" }
      ]
    },

    extend: {}
  },

  plugins: [require("@tailwindcss/line-clamp")]
};

module.exports = config;
