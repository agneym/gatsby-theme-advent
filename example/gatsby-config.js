module.exports = {
  siteMetadata: {
    title: `The Thing`,
    description: `A techxploration.`,
    author: `Agney Menon`,
    social: {
      twitter: `agneymenon`,
    },
  },
  plugins: [
    {
      resolve: `@agney/gatsby-theme-stories`,
      options: {
        basePath: "/",
      },
    },
  ],
};
