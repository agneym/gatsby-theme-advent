const colors = {
  white: "#ffffff",
  red: "#ff0012",
  darkGreen: "#00B32C",
};

const fonts = {
  display: `'system'`,
  heading: "'Aleo', serif",
};

const theme = {
  fonts,
  colors,
  cover: {
    color: colors.white,
    height: "50vh",
    fontSize: "8rem",
  },
  listing: {
    common: {
      shadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 2px 0px`,
      radius: "6px",
      fontSize: "4rem",
    },
    unlocked: {
      frontColor: colors.red,
      backColor: colors.darkGreen,
      backPadding: "4rem",
    },
  },
};

export default theme;
