import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import knot from '../svg/rdela-diamond.svg'

const cYear = new Date().getFullYear()

class Masthead extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    const siteURL = this.props.siteURL
    let topknot

    topknot = (
      <h3>
        <Link to={'/'}>
          <span
            style={{
              backgroundImage: `url(${knot})`,
            }}
          >
            {siteTitle}
          </span>
        </Link>
      </h3>
    )

    return (
      <header>
        <Helmet defaultTitle={siteTitle} titleTemplate={'%s - ' + siteTitle}>
          <html lang="en" />
          <meta name="copyright" content={cYear} />
          <meta name="description" content={this.props.description} />
          <meta property="og:locale" content="en" />
          <meta property="og:url" content={siteURL} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:image" content={`${siteURL}/rdela-512.png`} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={this.props.description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={this.props.siteTwitter} />
          <meta name="twitter:creator" content={this.props.siteTwitter} />
          <meta name="twitter:description" content={this.props.description} />
          <link rel="icon" type="image/png" href="icons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="icons/favicon-32x32.png" sizes="32x32" />
        </Helmet>
        {topknot}
      </header>
    )
  }
}

export default Masthead
