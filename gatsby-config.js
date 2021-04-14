module.exports = {
  siteMetadata: {
    title: "neff",
    author: "neff1337",
    description: "Neff1337 Portfilio",
    siteUrl: "https://neff.gtsb.io",
    keywords: "neff",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neff Portfolio`,
        short_name: `Neff137`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#E94F37`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
  ],
};
