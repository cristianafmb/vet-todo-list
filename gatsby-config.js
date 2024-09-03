const myCustomQueries = {
  xs: "(max-width: 320px)",
  mobile: "(max-width: 768px)",
  md: "(max-width: 1025px)",
  l: "(max-width: 1536px)",
  xl: "(min-width: 1536px)",
  portrait: "(orientation: portrait)",
  tablet: "(max-width: 1149px)",
  custom: "(min-width: 1150px)",
  customLarge: "(min-width: 2550px)"
}

module.exports = {
  siteMetadata: {
    title: `Developer`,
    description: `Cristiana Baiorte`,
    author: `Cristiana Baiorte`,
    siteUrl: `https://github.com/cristianafmb/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
        ignore: [`**/\.*`]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-htaccess',
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    'gatsby-transformer-json',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pt`],
        defaultLanguage: `pt`,
        siteUrl: `https://fozdeprata.pt/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
}
