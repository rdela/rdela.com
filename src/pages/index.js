import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { rhythm } from '../utils/typography'

import Layout from '../components/layout'

class PostIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <nav>
          <Helmet />
          <ul className="flex-container">
            {posts.map(({ node }) => {
              const title =
                node.frontmatter.title ||
                node.fields.slug.slice(1, -1).replace(/-/g, ' ')
              return (
                <li
                  className="flex-item"
                  key={node.fields.slug}
                  style={{
                    listStyle: `none`,
                    marginBottom: rhythm(1 / 4),
                    marginLeft: 0,
                  }}
                >
                  <Link to={node.fields.slug}>
                    {node.frontmatter.image && (
                      <img
                        alt={title}
                        src={node.frontmatter.image.childImageSharp.resize.src}
                        style={{
                          display: `block`,
                          marginBottom: rhythm(1 / 6),
                        }}
                      />
                    )}
                    <h3
                      style={{
                        fontSize: `1rem`,
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
                </li>
              )
            })}
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default PostIndex

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
