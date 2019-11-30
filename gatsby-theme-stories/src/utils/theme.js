const colors = {
  white: "#ffffff",
  red: "#ff0012",
  darkGreen: "#00B32C",
};

const theme = {
  fonts: {},
  colors,
  cover: {
    color: colors.white,
    height: "50vh",
    fontSize: "8rem",
  },
  listing: {
    unlocked: {
      frontColor: colors.red,
      backColor: colors.darkGreen,
    },
  },
};

export default theme;
