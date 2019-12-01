import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Cover from "../components/Cover";
import Listing from "../components/Listing";
import SEO from "../components/SEO";
import NewsLetter from "../components/NewsLetter";

const pageQuery = graphql`
  query getAllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt(pruneLength: 160)
          fields {
            slug
          }
        }
      }
    }
  }
`;

function Landing({ pageContext }) {
  const data = useStaticQuery(pageQuery);
  const edges = data.allMarkdownRemark.edges;
  const basePath = pageContext.basePath;

  return (
    <Layout>
      <SEO />
      <Cover />
      <Listing data={edges} base={basePath} />
      <NewsLetter />
    </Layout>
  );
}

export default Landing;
