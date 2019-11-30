const fs = require("fs");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

const ListingTemplate = require.resolve("./src/templates/Landing.js");
const PostTemplate = require.resolve("./src/templates/Post.js");

const query = `{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}`;

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: ListingTemplate,
  });
  return new Promise(async (resolve, reject) => {
    const result = await graphql(query).then(result => {
      if (result.errors) {
        reporter.panic(result.errors);
        reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        const path = basePath + post.node.fields.slug;

        actions.createPage({
          path,
          component: PostTemplate,
          context: {
            slug: path,
            previous,
            next,
          },
        });
      });
    });
    resolve(result);
  });
};
