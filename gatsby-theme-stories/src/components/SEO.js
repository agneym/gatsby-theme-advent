import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

function SEO({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title = "",
}) {
  const data = useStaticQuery(detailsQuery);
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={data.site.siteMetadata.title}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <title>{title}</title>
    </Helmet>
  );
}

export default SEO;
