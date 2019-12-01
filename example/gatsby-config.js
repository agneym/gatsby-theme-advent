module.exports = {
  siteMetadata: {
    title: `The Mindless`,
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
        basePath: "/december",
      },
    },
  ],
};
