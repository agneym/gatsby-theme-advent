import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Cover from "../components/Cover";
import Listing from "../components/Listing";
import SEO from "../components/SEO";

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

function Landing() {
  const data = useStaticQuery(pageQuery);
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO />
      <Cover />
      <Listing data={edges} />
    </Layout>
  );
}

export default Landing;
