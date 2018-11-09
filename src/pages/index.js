import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <nav>
          <div>
            <Helmet />
            <ul
              className="flex-container"
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
                      marginBottom: rhythm(1 / 4),
                      marginLeft: 0,
                    }}
                  >
                    <div className="flex-item">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.image && (
                          <img
                            alt={title}
                            src={
                              node.frontmatter.image.childImageSharp.resize.src
                            }
                            style={{
                              display: `block`,
                              marginBottom: rhythm(1 / 6),
                            }}
                          />
                        )}
                        <h3
                          style={{
                            fontSize: `1rem`,
                            fontWeight: `500`,
                            marginBottom: rhythm(1 / 16),
                            lineHeight: 1.25,
                            textTransform: `uppercase`,
                          }}
                        >
                          {title}
                        </h3>
                        <p
                          style={{
                            lineHeight: 1.25,
                          }}
                        >
                          <small>{node.frontmatter.date}</small>
                        </p>
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
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
            date(formatString: "D MMMM YYYY")
            title
            image {
              childImageSharp {
                resize(width: 540, height: 540) {
                  src
                }
                fluid(maxWidth: 180) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
