/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1280px" }, // 1136 WEB
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" }, // 720 TABLET
      // => @media (max-width: 767px) { ... }

      sm: { max: "450px" }, // 312 MOBILE
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "custom-laptop": "repeat(12, 1fr)",
        "custom-mobile": "repeat(4, 1fr)",
      },

      maxWidth: {
        "laptop-full": "80rem",
        "tablet-full": "48rem",
        "mobile-full": "28rem",
      },

      width: {
        "laptop-full": "80rem",
        "tablet-full": "48rem",
        "mobile-full": "28rem",
        laptop: "71rem",
        tablet: "45rem",
        mobile: "22.5rem",
      },
    },
  },
  plugins: [],
};
