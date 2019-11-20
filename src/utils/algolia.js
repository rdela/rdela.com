// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
// https://github.com/janosh/janosh.io/blob/master/src/utils/algolia.js
// ../components/search/index.js

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { frontmatter: { draft: { ne: true } } }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          frontmatterExcerpt: excerpt
          date(formatString: "D MMMM YYYY")
          rawDate: date
        }
        headings {
          headingValue: value
        }
        excerpt(pruneLength: 5000)
        objectID: id
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { fields, frontmatter, headings, ...rest } }) => ({
    ...fields,
    ...frontmatter,
    ...headings,
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
