import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import knot from '../svg/rdela-knot.svg'
import { rhythm, scale } from '../utils/typography'

const cYear = new Date().getFullYear();

class Masthead extends React.Component {
  render() {
    const siteTitle = this.props.title
    let pTop = `48px`
    let topknot

    topknot = (
      <h1
        style={{
          ...scale(0.4),
          lineHeight: `2rem`,
          marginTop: 0,
          marginBottom: rhythm(1 / 2),
        }}
      >
        <span
          style={{
            display: `block`,
            width: `100%`,
            height: `76px`,
            backgroundImage: `url(${knot})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `52px`,
            backgroundPosition: `left top`,
            paddingBottom: 0,
            paddingTop: pTop,
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          {siteTitle}
        </span>
      </h1>
    )

    if (this.props.isHome !== true) {
      // pTop = `48px`
      topknot = (
        <h3
          style={{
            lineHeight: `2rem`,
            marginTop: 0,
            marginBottom: rhythm(1.00875),
          }}
        >
          <Link to={'/'}>
            <span
              style={{
                display: `block`,
                width: `100%`,
                height: `76px`,
                backgroundImage: `url(${knot})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `52px`,
                backgroundPosition: `left top`,
                paddingBottom: 0,
                paddingTop: pTop,
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              {siteTitle}
            </span>
          </Link>
        </h3>
      )
    }

    return (
      <div>
        <Helmet
          defaultTitle={siteTitle}
          titleTemplate={'%s - ' + siteTitle}
        >
          <meta name="copyright" content={cYear} />
          <meta name="twitter:site" content="@rickydelaveaga" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content={siteTitle} />
          <html lang="en" />
        </Helmet>
        <header>{topknot}</header>
      </div>
    )
  }
}

export default Masthead

export const mastQuery = graphql`
  query mast {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
