import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title}`} />
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
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`
