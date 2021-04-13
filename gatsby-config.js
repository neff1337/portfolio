module.exports = {
  siteMetadata: {
    title: "neff",
    siteUrl: `https://neff.gtsb.io`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "/src/gatsby-plugin-theme-ui/index",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
    //! DELETED
    /* {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }, */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `188f78c707da19071c8e48ca5f4b14`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
};
