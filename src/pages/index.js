import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <nav>
        <div>
          <Helmet />
          <ul
            style={{
              marginLeft: 0,
            }}
          >
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <li
                  key={node.fields.slug}
                  style={{
                    listStyle: `none`,
                    marginLeft: 0,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
