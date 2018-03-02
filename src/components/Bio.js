import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPaintBrush } from '@fortawesome/fontawesome-free-solid'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab'

import knot from '../svg/rdela-knot.svg'
import { rhythm } from '../utils/typography'

// fontawesome.library.add(faTwitter, faCoffee)

class Bio extends React.Component {
  render() {
    const author = this.props.author
    const siteGithub = this.props.siteGithub
    const siteGitlab = this.props.siteGitlab
    const siteTitle = this.props.siteTitle
    const siteTwitter = this.props.siteTwitter

    // console.log(`author: ` + author)
    // console.log(`siteTitle: ` + siteTitle)
    // console.log(`github: ` + siteGithub)
    // console.log(`twitter: ` + siteTwitter)
    // console.log(`github link: ` + siteGithub.substring(1))
    // console.log(`twitter link: ` + siteTwitter.substring(1))

    let authorLink

    authorLink = (
      <span>
        <strong>{author}</strong>
      </span>
    )

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
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Hyperlinked words assembled by <span>{authorLink}</span>
          {` `}
          author of various bug fixes and improvements{` `}
          <a href="https://famebot.com/">@famebot</a>
        </p>

        <p>
          <a href={`https://twitter.com/${siteTwitter.substring(1)}`}>
            <span
              className="iconbox"
              style={{
                width: `1rem`,
                height: `1.1115rem`,
                marginRight: `0.219rem`,
                display: `inline-block`,
                verticalAlign: `baseline`,
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </span>{' '}
            {siteTwitter} on twitter
          </a>
          {` `}
          <br />
          <a href={`https://github.com/${siteGithub.substring(1)}`}>
            <span
              className="iconbox"
              style={{
                width: `1rem`,
                height: `1.1115rem`,
                marginRight: `0.219rem`,
                display: `inline-block`,
                verticalAlign: `baseline`,
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </span>{' '}
            {siteGithub} on github
          </a>
          {` `}
          <br />
          <a href={`https://gitlab.com/${siteGitlab.substring(1)}`}>
            <span
              className="iconbox"
              style={{
                width: `1rem`,
                height: `1.1115rem`,
                marginRight: `0.219rem`,
                display: `inline-block`,
                verticalAlign: `baseline`,
              }}
            >
              <FontAwesomeIcon icon={faGitlab} />
            </span>{' '}
            {siteGithub} on gitlab
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
