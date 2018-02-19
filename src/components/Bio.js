import React from 'react'
import Link from 'gatsby-link'

import knot from '../svg/rdela-knot.svg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const author = this.props.author
    const siteTitle = this.props.siteTitle
    const siteTwitter = this.props.siteTwitter
    const siteGithub = this.props.siteGithub

    // console.log(`author: ` + author)
    // console.log(`siteTitle: ` + siteTitle)
    // console.log(`github: ` + siteGithub)
    // console.log(`twitter: ` + siteTwitter)
    // console.log(`github link: ` + siteGithub.substring(1))
    // console.log(`twitter link: ` + siteTwitter.substring(1))

    let authorLink

    authorLink = <strong>{author}</strong>

    if (this.props.isHome !== true) {
      authorLink = (
        <Link to="/">
          <strong>{author}</strong>
        </Link>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Hyperlinked words assembled by <span>{authorLink}</span>, author of
          various{` `}
          bug fixes and improvements{` `}
          <a href="https://famebot.com/">@famebot</a>
          {` `}
          <br />
          <br />
          <a href={`https://twitter.com/${siteTwitter.substring(1)}`}>
            {siteTwitter} on twitter
          </a>
          {` `}
          <br />
          <a href={`https://github.com/${siteGithub.substring(1)}`}>
            {siteGithub} on github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
