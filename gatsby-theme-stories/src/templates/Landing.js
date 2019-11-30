import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
  return <p>Landing page</p>;
}

export default Landing;
