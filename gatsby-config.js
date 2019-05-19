module.exports = {
  siteMetadata: {
    author: `Ricky de Laveaga`,
    description: `6th-generation organic click-farmer from California`,
    email: `ricky@rdela.com`,
    github: `@rdela`,
    gitlab: `@rdela`,
    keybase: `@rdela`,
    mastodon: `@rdela@mastodon.social`,
    siteURL: `https://rdela.com`,
    title: `Ricky de Laveaga`,
    twitter: `@rickydelaveaga`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-numbered-footnotes',
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `#000`,
              maxWidth: 816,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricky de Laveaga`,
        short_name: `rdela`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#9f87fd`,
        display: `standalone`,
        include_favicon: false,
        legacy: false,
        icons: [
          {
            src: `/icons/rdela-fav-16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-fav-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-fav-48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-fav-64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        generator: `Gatsby`,
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteURL
              site_url: siteURL
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteURL + edge.node.fields.slug,
                  guid: site.siteMetadata.siteURL + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { draft: { ne: true } }}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: 'rss.xml',
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
