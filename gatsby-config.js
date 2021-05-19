module.exports = {
  siteMetadata: {
    title: "My Home Design",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://142.93.103.8:8080/graphql",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
