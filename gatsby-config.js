let activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)
console.log(`NODE_ENV is ${process.env.NODE_ENV}`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

// const pageQuery = `{
//   allSitePage(
//     filter: {
//       componentChunkName: {nin: [
//         "component---src-templates-post-list-js",
//         "component---src-templates-post-article-js"
//       ]},
//       path: {in: ["/links/", "/bio/"]}
//     }
//   ) {
//     edges {
//       node {
//         objectID: id
//         path
//         internal {
//           contentDigest
//         }
//       }
//     }
//   }
// }`

const postQuery = `{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          excerpt
          title
          image {
            id
            publicURL
            relativePath
          }
        }
        headings {
          value
        }
        excerpt
        rawMarkdownBody
        objectID: id
        internal {
          contentDigest
        }
      }
    }
  }
}`

const queries = [
  // {
  //   query: pageQuery,
  //   transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
  // },
  {
    query: postQuery,
    transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => node), // optional
  },
];

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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
