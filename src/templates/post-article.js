import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const prev = this.props.pageContext.prev
    const next = this.props.pageContext.next
    const siteMetadata = this.props.data.site.siteMetadata
    const metaDesc = post.frontmatter.excerpt
      ? post.frontmatter.excerpt
      : post.excerpt

    return (
      <Layout>
        <section className="post">
          <article>
            <Helmet>
              {post.frontmatter.title && (
                <title>{post.frontmatter.title}</title>
              )}
              <meta name="description" content={metaDesc} />
              <meta property="og:description" content={metaDesc} />
              <meta name="twitter:description" content={metaDesc} />
              <meta
                property="og:url"
                content={`${siteMetadata.siteURL}${post.fields.slug}`}
              />
              {post.frontmatter.title && (
                <meta property="og:title" content={post.frontmatter.title} />
              )}
              {post.frontmatter.image && (
                <meta
                  property="og:image"
                  content={`${siteMetadata.siteURL}${post.frontmatter.image.childImageSharp.resize.src}`}
                />
              )}
              {post.frontmatter.image && (
                <meta
                  name="twitter:image"
                  content={`${siteMetadata.siteURL}${post.frontmatter.image.childImageSharp.resize.src}`}
                />
              )}
              <meta property="og:type" content="article" />
              <meta name="article:author" content={siteMetadata.author} />
              <meta name="author" content={siteMetadata.author} />
              <meta name="twitter:label1" content="Reading time" />
              <meta
                name="twitter:data1"
                content={`${post.timeToRead} min read`}
              />
              {post.frontmatter.rawDate && (
                <meta
                  name="article:published_time"
                  content={post.frontmatter.rawDate}
                />
              )}
            </Helmet>
            {post.frontmatter.title && <h1>{post.frontmatter.title}</h1>}
            {post.frontmatter.date && (
              <p className="meta">
                <small>{post.frontmatter.date}</small>
              </p>
            )}
            <p className="meta">{metaDesc}</p>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
          <hr />
          <nav>
            <div className="next-prev">
              {prev && (
                <Link to={prev.fields.slug}>
                  <h4 className="next-prev-label">Previous</h4>
                  <span className="next-prev-label">
                    <span className="iconbox">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    {` `}
                    {prev.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="next-prev next">
              {next && (
                <Link to={next.fields.slug}>
                  <h4 className="next-prev-label">Next</h4>
                  <span className="next-prev-label">
                    {next.frontmatter.title}
                    {` `}
                    <span className="iconbox">
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

export const postArticleQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
        siteURL
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
        excerpt
        date(formatString: "D MMMM YYYY")
        rawDate: date
        image {
          childImageSharp {
            resize(width: 2448, height: 2448) {
              src
            }
            fluid(quality: 72, maxWidth: 816) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
