import React from 'react'
import { Link } from 'gatsby'
// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faCode,
  faLink,
  faRobot,
  faRss,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

class Footer extends React.Component {
  render() {
    const siteEmail = this.props.siteEmail
    const siteGithub = this.props.siteGithub
    const siteGitlab = this.props.siteGitlab
    const siteTwitter = this.props.siteTwitter
    const siteURL = this.props.siteURL

    return (
      <section>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${siteEmail}`}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {` `}
              {siteEmail}
            </a>
          </li>

          <li>
            <a href="https://famebot.com/">
              <span>
                <FontAwesomeIcon icon={faRobot} />
              </span>
              {` `}
              &nbsp;famebot
            </a>
          </li>

          <li>
            <Link to="/l/">
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>
              {` `}
              links
            </Link>
          </li>

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
            <a
              href={`https://github.com/${siteGithub.substring(
                1
              )}/${siteURL.substring(8)}/`}
            >
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>
              {` `}
              &nbsp;source&nbsp;code
            </a>
          </li>

          <li>
            <a href={`https://github.com/${siteGithub.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              {` `}
              {siteGithub} on&nbsp;github
            </a>
          </li>

          <li>
            <a href={`https://gitlab.com/${siteGitlab.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faGitlab} />
              </span>
              {` `}
              {siteGitlab} on&nbsp;gitlab
            </a>
          </li>

          <li>
            <a href={`https://twitter.com/${siteTwitter.substring(1)}`}>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              {` `}
              {siteTwitter} on&nbsp;twitter
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
