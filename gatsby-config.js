module.exports = {
  siteMetadata: {
    title: `Heril Saha's Portfolio`,
    description: `Full Stack Developer and UX/UI Designer based in Alberta.`,
    author: `Heril Saha`,
  },
  plugins: [
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.ico',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heril Saha's Portfolio`,
        short_name: `Heril Saha's Portfolio`,
        start_url: `/`,
        background_color: `#d1bcbc`,
        theme_color: `#2f3676`,
        display: `standalone`,
        icon: `src/favicon.ico`,
      },
    },
  ],
};
