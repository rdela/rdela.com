import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink, faRss } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab'

import knot from '../svg/rdela-knot.svg'

class Bio extends React.Component {
  render() {
    const authorNBSP = this.props.author.replace(/ /g, '&nbsp;')
    const siteEmail = this.props.siteEmail
    const siteGithub = this.props.siteGithub
    const siteGitlab = this.props.siteGitlab
    const siteTitle = this.props.siteTitle
    const siteTwitter = this.props.siteTwitter

    let authorLink, linksLink

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
      <li>
        <span>
          <FontAwesomeIcon icon={faLink} />
        </span>
        {` `}
        links
      </li>
    )

    if (this.props.isLinks !== true) {
      linksLink = (
        <li>
          <Link to="/l/">
            <span>
              <FontAwesomeIcon icon={faLink} />
            </span>
            {` `}
            links
          </Link>
        </li>
      )
    }

    return (
      <section>
        <p>
          Hyperlinked words assembled by <span>{authorLink}</span>,{` `}
          author of various bug fixes and{` `}
          improvements&nbsp;<a href="https://famebot.com/">@famebot</a>
        </p>

        <ul className="bio-links">
          {linksLink}

          <li>
            <a href="/rss.xml">
              <span>
                <FontAwesomeIcon icon={faRss} />
              </span>
              {` `}
              rss feed
            </a>
          </li>

          <li>
            <a href={`https://gitlab.com/${siteGitlab.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faGitlab} />
              </span>
              {` `}
              {siteGithub} on gitlab
            </a>
          </li>

          <li>
            <a href={`https://github.com/${siteGithub.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              {` `}
              {siteGithub} on github
            </a>
          </li>

          <li>
            <a href={`https://twitter.com/${siteTwitter.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              {` `}
              {siteTwitter} on twitter
            </a>
          </li>

          <li>
            <a href={`mailto:${siteEmail}`}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {` `}
              {siteEmail}
            </a>
          </li>

        </ul>
      </section>
    )
  }
}

export default Bio
