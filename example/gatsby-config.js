module.exports = {
  siteMetadata: {
    title: `The Blog Name`,
    description: `A description that fits the case.`,
    author: `agneymenon`,
  },
  plugins: [
    {
      resolve: `@agney/gatsby-theme-advent`,
      options: {
        basePath: "",
      },
    },
  ],
};
