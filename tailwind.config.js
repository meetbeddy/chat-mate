
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",


      pink: "#EA4C89",
      lightPink: "#FF6E96",
      pastelPink: "#FFE3E8",
      darkBlue: "#2D2D39",
      lightBlue: "#A7BBC7",
      white: "#FFFFFF",
      lightGray: "#F8F9FA",
      darkGray: "#495057",

      // Utility colors
      error: "#FF4C4C",
      success: "#4CAF50",
      warning: "#FF9800",
      info: "#2196F3",
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '1rem',
      },
    },
  },
  extend: {
    backgroundImage: {
      mainBg: "url('/src/assets/bg/background.svg')",
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: false,
  },
};
