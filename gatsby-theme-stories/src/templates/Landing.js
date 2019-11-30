import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";

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
      <p>Landing page</p>
    </Layout>
  );
}

export default Landing;
