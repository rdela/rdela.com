import React from 'react'
import { Link } from 'gatsby'
// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faFileAlt,
  faCode,
  faLink,
  faRobot,
  faRss,
} from '@fortawesome/free-solid-svg-icons'
// https://fontawesome.com/icons?d=gallery

import Topknot from './Topknot'

class Footer extends React.Component {
  render() {
    const siteEmail = this.props.siteEmail
    const siteGithub = this.props.siteGithub
    const siteTitle = this.props.siteTitle
    const siteURL = this.props.siteURL

    return (
      <section>
        <Topknot siteTitle={siteTitle} />
        <ul className="footer-links">
          <li>
            <Link to="/bio/">
              <span>
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              {` `}
              bio
            </Link>
          </li>

          <li>
            <Link to="/links/">
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
            <a href="https://famebot.com/">
              <span>
                <FontAwesomeIcon icon={faRobot} />
              </span>
              {` `}
              famebot
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
              source code
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

export default Footer
