const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redirects/gatsby-node.js
  // Redirect /index.html to root.
  // Redirect /rss & /feed to /rss.xml

  const feedPath = `/rss.xml`

  const redirectBatch = [
    { f: `/index.html`, t: `/` },
    { f: `/rss`, t: feedPath },
    { f: `/rss/`, t: feedPath },
    { f: `/feed`, t: feedPath },
    { f: `/feed/`, t: feedPath },
  ]

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see forEach in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n')
  })

  return new Promise((resolve, reject) => {
    const postArticle = path.resolve(`./src/templates/post-article.js`)
    const postList = path.resolve(`./src/templates/post-list.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    draft
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.log(result.errors)
          reject(result.errors)
        }

        // filter drafts
        const posts = _.filter(result.data.allMarkdownRemark.edges, edge => {
          const slug = _.get(edge, `node.fields.slug`)
          const draft = _.get(edge, `node.frontmatter.draft`)
          if (!slug) return undefined

          if (!draft) {
            return edge
          }

          return undefined
        })

        // Create post-list pages
        const postsPerPage = 12
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({
          length: numPages,
        }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/page/${i + 1}`,
            component: slash(postList),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })

        // Create post-article pages
        posts.forEach((edge, index) => {
          const next = index === 0 ? null : posts[index - 1].node
          const prev = index === posts.length - 1 ? null : posts[index + 1].node

          createPage({
            path: `${edge.node.fields.slug}`, // required
            component: postArticle,
            context: {
              slug: edge.node.fields.slug,
              prev,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
