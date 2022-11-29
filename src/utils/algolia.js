// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
// https://github.com/janosh/janosh.io/blob/master/src/utils/algolia.js
// ../components/search/index.js

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { frontmatter: { draft: { ne: true } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 5000)
        fields {
          slug
        }
        frontmatter {
          title
          frontmatterExcerpt: excerpt
        }
        id
        internal {
          contentDigest
        }
      }
    }
  }
}`

const flatten = (arr) =>
  arr.map(({ node: { fields, frontmatter, ...rest } }) => ({
    ...fields,
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
