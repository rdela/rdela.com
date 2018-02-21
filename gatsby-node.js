const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // const { createPage, createRedirect } = actions

  // https://github.com/reactjs/reactjs.org/blob/master/gatsby/createPages.js#L14
  // Used to detect and prevent duplicate redirects
  // const redirectToSlugMap = {}

  return new Promise((resolve, reject) => {
    const postArticle = path.resolve('./src/templates/post-article.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
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
