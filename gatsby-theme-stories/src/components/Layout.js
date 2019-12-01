import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../utils/theme";
import Navbar from "./Navbar";
import GlobalStyles from "../utils/Global";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar title="Mindless" />
      {children}
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Layout;
