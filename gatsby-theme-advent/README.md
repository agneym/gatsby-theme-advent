# Gatsby Advent Theme

A simple and easy advent theme using Gatsby and Styled Components.

<a href="https://badge.fury.io/js/%40agney%2Fgatsby-theme-advent"><img src="https://badge.fury.io/js/%40agney%2Fgatsby-theme-advent.svg" alt="npm version" height="18"></a>
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

[Demo](https://vigorous-ptolemy-fe8a70.netlify.com/event)

## Manual Setup

In your `gatsby-config.js`:

```bash
npm i --save-dev @agney/gatsby-theme-advent

# OR #
yarn add --dev @agney/gatsby-theme-advent
```

```js
module.exports = {
  plugins: [
    {
      resolve: `@agney/gatsby-theme-advent`,
      options: {
        contentPath: "content", // Tell the theme where your markdown files are.
        assetPath: "assets", // Tell the there where your cover image is.
        basePath: "/december", // Tell the theme which URL to render the theme at.
      },
    },
  ],
};
```

## Options

| Options     |                     Description                     | Required | Default |
| ----------- | :-------------------------------------------------: | :------: | :-----: |
| contentPath |        This where markdown files are hosted         |  false   | content |
| assetPath   |        This is where your cover image can be        |  false   | assets  |
| basePath    | This is where URL where the theme is to be rendered |  false   |         |

## Adding the Data

Add markdown files with frontmatter:

```
---
title: "This is the first advent gift"
date: "2019-12-01T22:12:03.284Z"
published: true
---
```

The post will be published only if the frontmatter `published` is `true`.

## Changing the theme

Create a `theme.js` file at `src/@agney/gatsby-theme-advent/utils/theme.js`

```js
const theme = {};

export default theme;
```

[See full properties here](https://github.com/agneym/gatsby-theme-advent/blob/master/gatsby-theme-advent/src/utils/theme.js)

If you need to keep existing theme and edit some of the values:

```js
import merge from "lodash.merge";
import theme from "@agney/gatsby-theme-advent";

export default merge({}, theme, {
  colors: {
    primary: "blue",
  },
});
```

## Replacing Components (Shadowing)

[Docs](https://www.gatsbyjs.org/docs/themes/shadowing/)

## Contributing

This theme makes use of [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

```
yarn
yarn dev
```
