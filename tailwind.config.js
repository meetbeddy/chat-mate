module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gradientColor: "#FF7E79",
      disabledColor: "#B0B0B0",
      pureBlackColor: "#000000",

      blackHigh: "#333333",
      blackMid: "#555555",
      blackLow: "#777777",

      whiteHigh: "#FFFFFF",
      whiteMid: "#F8F8F8",
      whiteLow: "#F0F0F0",

      errorColor: "#FF4C4C",
      successColor: "#4CAF50",
      warningColor: "#FF9800",
      infoColor: "#2196F3",
      alertColor: "#FFAB00",

      bgColor: "#EAEAEA",
      bgTextareaColor: "#F7F9FC",
      textHeaderColor: "#2C3E50",
      btnDisabledTextColor: "#DADADA",
      btnColor: "#3498DB",
      btnColorDisabled: "#BDC3C7",
      titleColor: "#2C3E50",
      subTitleColor: "#7F8C8D",

      //btn colors
      btnGradientStart: "#1A202C",
      btnGradientEnd: "#4A5568",
      btnHoverColor: "#2D3748",
      btnNavColor: "#1A202C",
      cardGradientStart: "#4A90E2",
      cardGradientEnd: "#8AB4F8",
      brownFadeColor: "#9E9E9E",
      brownTextColor: "#9E9E9E",

      // about
      aboutTextStart: "#1A202C",
      aboutTextEnd: "#4A5568",
      aboutGradientStart: "#2D3748",
      aboutGradientEnd: "#A0AEC0",
      aboutHeaderColor: "#6B7280",
      aboutDetailsColor: "#4A5568",
    },
    extend: {
      backgroundImage: {
        mainBg: "url('/src/assets/bg/background.svg')",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: false,
  },
};
