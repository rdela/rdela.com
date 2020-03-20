/* eslint-disable no-console */
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

console.log(`Using environment config: '${activeEnv}'`)
console.log(`NODE_ENV is ${process.env.NODE_ENV}`)

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
})

const queries = require(`./src/utils/algolia`)

module.exports = {
  siteMetadata: {
    author: `Ricky de Laveaga`,
    description: `A source familiar with the situation`,
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
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 816,
              linkImagesToOriginal: false,
              tracedSVG: {
                color: `#4F38A8`,
                blackOnWhite: false,
              },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `±`,
            },
          },
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
        theme_color: `#000`,
        display: `standalone`,
        include_favicon: false,
        legacy: false,
        icons: [
          {
            src: `/icons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/icons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/icons/rdela-192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/rdela-512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
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
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteURL + edge.node.fields.slug,
                  guid: site.siteMetadata.siteURL + edge.node.fields.slug,
                  enclosure: edge.node.frontmatter.image && {
                    url:
                      site.siteMetadata.siteURL +
                      edge.node.frontmatter.image.publicURL,
                  },
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
                      image {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
          `,
            output: `rss.xml`,
            title: `Ricky de Laveaga`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 20000, // default: 1000
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}
