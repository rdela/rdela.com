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
  faRss,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
// https://fontawesome.com/icons?d=gallery

import Topknot from './Topknot'

class Footer extends React.Component {
  render() {
    const siteEmail = this.props.siteEmail
    const siteGithub = this.props.siteGithub
    const siteTitle = this.props.siteTitle
    const siteTwitter = this.props.siteTwitter
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
