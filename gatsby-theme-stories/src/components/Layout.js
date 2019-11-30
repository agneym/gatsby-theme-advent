import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../utils/theme";
import GlobalStyles from "../utils/Global";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Layout;
