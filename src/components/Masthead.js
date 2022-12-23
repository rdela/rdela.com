import React from 'react'
import { Helmet } from 'react-helmet'

import Topknot from './Topknot'

import Search from './search'
const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Posts`, hitComp: `PostHit` },
]

const cYear = new Date().getFullYear()

class Masthead extends React.Component {
  render() {
    const description = this.props.description
    const siteTitle = this.props.siteTitle
    const siteURL = this.props.siteURL
    const twitter = this.props.siteTwitter

    return (
      <header className="masthead">
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s - ` + siteTitle}>
          <html lang="en" />
          <meta name="copyright" content={cYear} />
          <meta name="description" content={description} />
          <meta property="og:locale" content="en" />
          <meta property="og:url" content={siteURL} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={`${siteURL}/rdela-1260x630.png`}
          />
          <meta name="twitter:site" content={twitter} />
          <meta name="twitter:creator" content={twitter} />
          <meta name="twitter:description" content={description} />
          <link
            rel="icon"
            type="image/png"
            href="/icons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/icons/favicon-32x32.png"
            sizes="32x32"
          />
        </Helmet>
        <h1 className="visually-hidden">{siteTitle}</h1>
        <div className="navbar">
          <Topknot siteTitle={siteTitle} />
          <Search expand indices={searchIndices} />
        </div>
      </header>
    )
  }
}

export default Masthead
