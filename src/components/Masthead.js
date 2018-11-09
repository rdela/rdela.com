import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import knot from '../svg/rdela-knot.svg'
import { rhythm } from '../utils/typography'

const cYear = new Date().getFullYear()

class Masthead extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    let topknot

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
              backgroundPosition: `center top`,
              paddingBottom: 0,
              paddingTop: `48px`,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {siteTitle}
          </span>
        </Link>
      </h3>
    )

    return (
      <header
        style={{
          textAlign: `center`,
        }}
      >
        <Helmet defaultTitle={siteTitle} titleTemplate={'%s - ' + siteTitle}>
          <meta name="copyright" content={cYear} />
          <meta name="twitter:site" content={this.props.siteTwitter} />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content={siteTitle} />
          <meta name="description" content={this.props.description} />
          <html lang="en" />
        </Helmet>
        {topknot}
      </header>
    )
  }
}

export default Masthead
