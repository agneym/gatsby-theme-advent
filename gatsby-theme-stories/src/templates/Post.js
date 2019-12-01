import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const pageQuery = graphql`
  query getPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;

function Post({ data }) {
  console.log(data);
  return (
    <Layout>
      <p>Story unfolds here</p>
    </Layout>
  );
}

export default Post;
