import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../utils/theme";
import Navbar from "./Navbar";
import GlobalStyles from "../utils/Global";
import Footer from "./Footer";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { title } = data.site.siteMetadata;
  return (
    <ThemeProvider theme={theme}>
      <Navbar title={title} />
      {children}
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Layout;
