import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Container, Header, Title, LinkList } from "./PostStyles";
import AnimatedLink from "../components/AnimatedLink";
import Share from "../components/share";

export const pageQuery = graphql`
  query getPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt
      html
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

function Post({ data, pageContext }) {
  const { frontmatter, html, excerpt } = data.markdownRemark;
  const { previous, next, basePath } = pageContext;
  const { author } = data.site.siteMetadata;

  return (
    <Layout>
      <Container>
        <Header>
          <Title>{frontmatter.title}</Title>
          <sub
            css={`
              color: rgba(0, 0, 0, 0.8);
            `}
          >
            <span>Posted on {frontmatter.date}</span>
          </sub>
        </Header>
        <div
          css={`
            margin: 5rem 0;
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Share
          post={{
            title: frontmatter.title,
            excerpt: excerpt,
            author,
          }}
        />

        <LinkList>
          <li>
            {previous && (
              <AnimatedLink
                to={basePath + previous.fields.slug}
                rel="prev"
                direction="rtl"
              >
                ← {previous.frontmatter.title}
              </AnimatedLink>
            )}
          </li>
          <li>
            {next && (
              <AnimatedLink
                to={basePath + next.fields.slug}
                rel="next"
                direction="ltr"
              >
                {next.frontmatter.title} →
              </AnimatedLink>
            )}
          </li>
        </LinkList>
      </Container>
    </Layout>
  );
}

export default Post;
