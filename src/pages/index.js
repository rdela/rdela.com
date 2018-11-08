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
              className='flex-container'
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
                      marginBottom: '32px',
                      marginTop: '32px',
                      marginLeft: 0,
                    }}
                  >
                    <div className='flex-item'>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.image && (
                          <img
                            alt={title}
                            src={
                              node.frontmatter.image.childImageSharp.resize.src
                            }
                          />
                        )}
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          {title}
                        </h3>
                        <small>{node.frontmatter.date}</small>
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
            date(formatString: "DD MMMM YYYY")
            title
            image {
              childImageSharp {
                resize(width: 288, height: 288) {
                  src
                }
                fluid(maxWidth: 96) {
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
