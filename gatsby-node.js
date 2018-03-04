const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redirects/gatsby-node.js
  // Redirect /index.html to root.
  // Redirect /rss to /rss.xml

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
    console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n')
  })

  return new Promise((resolve, reject) => {
    const postArticle = path.resolve('./src/templates/post-article.js')
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
          console.log(result.errors)
          reject(result.errors)
        }

        // filter drafts
        const posts = _.filter(result.data.allMarkdownRemark.edges, edge => {
          const slug = _.get(edge, `node.fields.slug`)
          const draft = _.get(edge, `node.frontmatter.draft`)
          if (!slug) return

          if (!draft) {
            return edge
          }
        })

        posts.forEach((edge, index) => {
          const next = index === 0 ? false : posts[index - 1].node
          const prev =
            index === posts.length - 1 ? false : posts[index + 1].node

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
