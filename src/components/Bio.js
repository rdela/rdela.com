import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLink, faRss } from '@fortawesome/fontawesome-free-solid'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab'

import knot from '../svg/rdela-knot.svg'
import { rhythm } from '../utils/typography'

// fontawesome.library.add(faTwitter, faCoffee)

class Bio extends React.Component {
  render() {
    const authorNBSP = this.props.author.replace(/ /g, '&nbsp;')
    const siteGithub = this.props.siteGithub
    const siteGitlab = this.props.siteGitlab
    const siteTitle = this.props.siteTitle
    const siteTwitter = this.props.siteTwitter

    const iconboxStyles = {
      width: `1rem`,
      height: `0.888888889rem`,
      lineHeight: `0.888888889rem`,
      marginRight: `0.219rem`,
      display: `inline-block`,
      verticalAlign: `baseline`,
    }

    let authorLink, linksLink
    const linkMargins = {
      marginBottom: rhythm(10 / 16),
      marginRight: rhythm(1 / 2),
    }

    authorLink = (
      <span>
        <strong>
          <span dangerouslySetInnerHTML={{ __html: authorNBSP }} />
        </strong>
      </span>
    )
    if (this.props.isHome !== true) {
      authorLink = (
        <Link to="/">
          <strong>
            <span dangerouslySetInnerHTML={{ __html: authorNBSP }} />
          </strong>
        </Link>
      )
    }

    linksLink = (
      <p style={linkMargins}>
        <span className="iconbox" style={iconboxStyles}>
          <FontAwesomeIcon icon={faLink} />
        </span>
        {` `}
        links
      </p>
    )

    if (this.props.isLinks !== true) {
      linksLink = (
        <p style={linkMargins}>
          <Link to="/l/">
            <span className="iconbox" style={iconboxStyles}>
              <FontAwesomeIcon icon={faLink} />
            </span>
            {` `}
            links
          </Link>
        </p>
      )
    }

    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <div><a href='https://readtheprintedword.org'><img src='https://readtheprintedword.org/rtpw-button3-200x128.png' alt='Read the Printed Word!' border='0' width='100' height='64' /></a></div>

        <p>
          Hyperlinked words assembled by <span>{authorLink}</span>,{` `}
          author of various bug fixes and{` `}
          improvements&nbsp;<a href="https://famebot.com/">@famebot</a>
        </p>

        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: `left`,
            marginBottom: rhythm(1 / 8),
          }}
        >
          {linksLink}

          <p style={linkMargins}>
            <a href="/rss.xml">
              <span className="iconbox" style={iconboxStyles}>
                <FontAwesomeIcon icon={faRss} />
              </span>
              {` `}
              rss feed
            </a>
          </p>

          <p style={linkMargins}>
            <a href={`https://gitlab.com/${siteGitlab.substring(1)}`}>
              <span className="iconbox" style={iconboxStyles}>
                <FontAwesomeIcon icon={faGitlab} />
              </span>
              {` `}
              {siteGithub} on gitlab
            </a>
          </p>

          <p style={linkMargins}>
            <a href={`https://github.com/${siteGithub.substring(1)}`}>
              <span className="iconbox" style={iconboxStyles}>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              {` `}
              {siteGithub} on github
            </a>
          </p>

          <p style={linkMargins}>
            <a href={`https://twitter.com/${siteTwitter.substring(1)}`}>
              <span className="iconbox" style={iconboxStyles}>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              {` `}
              {siteTwitter} on twitter
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Bio
