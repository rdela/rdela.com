import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteMetadata = get(this.props, 'data.site.siteMetadata')
    const metaDesc = post.frontmatter.excerpt
                  ? post.frontmatter.excerpt
                  : post.excerpt

    return (
      <div>
        {/* Add long list of social meta tags */}

          <Helmet>
            <title>{post.frontmatter.title}</title>
            <link
              rel="author"
              href={siteMetadata.siteUrl}
            />
            <meta
              name="description"
              content={metaDesc}
            />

            <meta name="og:description" content={metaDesc} />
            <meta name="twitter:description" content={metaDesc} />
            <meta name="og:title" content={post.frontmatter.title} />
            {post.frontmatter.image && (
              <meta
                name="og:image"
                content={`https://gatsbyjs.org${
                  post.frontmatter.image.childImageSharp.resize.src
                }`}
              />
            )}
            {post.frontmatter.image && (
              <meta
                name="twitter:image"
                content={`https://gatsbyjs.org${
                  post.frontmatter.image.childImageSharp.resize.src
                }`}
              />
            )}
            <meta name="og:type" content="article" />
            <meta name="article:author" content={siteMetadata.author} />
            <meta
              name="twitter:creator"
              content={siteMetadata.twitter}
            />
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
            paddingBottom: rhythm(1 / 32),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p>
          <small>{post.frontmatter.date}</small>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
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
        date(formatString: "DD MMMM YYYY")
        excerpt
        rawDate: date
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            sizes(maxWidth: 786) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }

    }
  }
`
