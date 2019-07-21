// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
// const pageQuery = `{
//   pages: allMarkdownRemark(
//     filter: {
//       fileAbsolutePath: { regex: "/pages/" },
//       frontmatter: {purpose: {eq: "page"}}
//     }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           slug
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`

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


// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
// const postQuery = `{
//   posts: allMarkdownRemark(
//     filter: { fileAbsolutePath: { regex: "/posts/" } }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           slug
//           date(formatString: "MMM D, YYYY")
//           tags
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`

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

/*
rawMarkdownBody
frontmatter {
  image {
    id
    publicURL
    relativePath
  }
}
internal {
  contentDigest
}
*/


// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
const flatten = arr =>
  arr.map(({ node: { fields, frontmatter, headings, ...rest } }) => ({
    ...fields,
    ...frontmatter,
    ...headings,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => flatten(data.pages.edges),
//     indexName: `Pages`,
//     settings,
//   },
//   {
//     query: postQuery,
//     transformer: ({ data }) => flatten(data.posts.edges),
//     indexName: `Posts`,
//     settings,
//   },
// ]

const queries = [
  // {
  //   query: pageQuery,
  //   transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
  // },
  {
    query: postQuery,
    // transformer: ({ data }) => data.posts.edges.map(({ node }) => node), // optional
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
  },
];


module.exports = queries