import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Cover from "../components/Cover";
import Listing from "../components/Listing";

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
  console.log(edges);
  return (
    <Layout>
      <Cover />
      <Listing data={edges} />
    </Layout>
  );
}

export default Landing;
