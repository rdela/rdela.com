import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { rhythm } from '../utils/typography'

import Layout from '../components/layout'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const prev = this.props.pageContext.prev
    const next = this.props.pageContext.next
    const siteMetadata = get(this.props, 'data.site.siteMetadata')
    const metaDesc = post.frontmatter.excerpt
      ? post.frontmatter.excerpt
      : post.excerpt

    const iconboxStyles = {
      width: `1rem`,
      height: `1rem`,
      lineHeight: `1rem`,
      display: `inline-block`,
      verticalAlign: `baseline`,
    }

    const nextPrevLabelStyles = {
      marginTop: `0`,
      textTransform: `uppercase`,
    }

    return (
      <Layout>
        <section>
          <article>
            {/* Add long list of social meta tags */}
            <Helmet>
              <title>{post.frontmatter.title}</title>
              <meta name="description" content={metaDesc} />

              <meta name="og:description" content={metaDesc} />
              <meta name="twitter:description" content={metaDesc} />
              <meta name="og:title" content={post.frontmatter.title} />
              {post.frontmatter.image && (
                <meta
                  name="og:image"
                  content={`https://rdela.com${
                    post.frontmatter.image.childImageSharp.resize.src
                  }`}
                />
              )}
              {post.frontmatter.image && (
                <meta
                  name="twitter:image"
                  content={`https://rdela.com${
                    post.frontmatter.image.childImageSharp.resize.src
                  }`}
                />
              )}
              <meta name="og:type" content="article" />
              <meta name="article:author" content={siteMetadata.author} />
              <meta name="twitter:creator" content={siteMetadata.twitter} />
              <meta name="author" content={siteMetadata.author} />
              <meta name="twitter:label1" content="Reading time" />
              <meta
                name="twitter:data1"
                content={`${post.timeToRead} min read`}
              />
              <meta
                name="article:published_time"
                content={post.frontmatter.rawDate}
              />
            </Helmet>
            <h1
              style={{
                marginBottom: 0,
                marginTop: rhythm(1 / 4),
                paddingBottom: rhythm(1 / 16),
                textAlign: `center`,
                textTransform: 'uppercase',
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                textAlign: `center`,
              }}
            >
              <small>{post.frontmatter.date}</small>
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
          <hr />
          <nav
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              alignItems: `center`,
              justifyContent: `center`,
              minHeight: `12rem`,
            }}
          >
            <div
              style={{
                width: `50%`,
                flexBasis: `50%`,
                height: `8rem`,
              }}
            >
              {prev && (
                <Link
                  to={prev.fields.slug}
                  style={{
                    display: `inline-block`,
                  }}
                >
                  <h4 style={nextPrevLabelStyles}>Previous</h4>
                  <span style={nextPrevLabelStyles}>
                    <span className="iconbox" style={iconboxStyles}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </span>{' '}
                    {prev.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
            <div
              style={{
                textAlign: `right`,
                width: `50%`,
                flexBasis: `50%`,
                height: `8rem`,
              }}
            >
              {next && (
                <Link
                  to={next.fields.slug}
                  style={{
                    display: `inline-block`,
                  }}
                >
                  <h4 style={nextPrevLabelStyles}>Next</h4>
                  <span style={nextPrevLabelStyles}>
                    {next.frontmatter.title}{' '}
                    <span className="iconbox" style={iconboxStyles}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </section>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
        twitter
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        excerpt
        rawDate: date
        image {
          childImageSharp {
            resize(width: 2448, height: 2448) {
              src
            }
            fluid(maxWidth: 816) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
