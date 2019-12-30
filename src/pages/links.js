import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { rhythm } from '../utils/typography'
// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBook, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab'
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase'
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW'
// https://fontawesome.com/icons?d=gallery

import Layout from '../components/layout'
import ialogo from '../svg/internet-archive-inv.svg'
import wikicorn from '../svg/wikicorn.svg'
import mdnDark from '../svg/mdn.svg'

class LinksPage extends React.Component {
  render() {
    const metaDesc = `Support Knowledge for Everyone`
    const siteMetadata = this.props.data.site.siteMetadata

    return (
      <Layout>
        <main role="main">
          <Helmet title={`Links Page 🔗📄`}>
            <meta name="description" content={metaDesc} />
            <meta property="og:description" content={metaDesc} />
            <meta name="twitter:description" content={metaDesc} />
            <meta property="og:url" content="https://rdela.com/links/" />
          </Helmet>
          <h1>
            Links Page{` `}
            <span role="img" aria-label="link symbol page facing up">
              &#x1f517;&#x1f4c4; {/* 🔗📄 */}
            </span>
          </h1>

          <section className="links">
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              Me Around the Web
            </h2>
            <h2
              style={{
                marginTop: 0,
              }}
            >
              <span role="img" aria-label="counter-clockwise arrows spiderweb">
                &#x1f504;&#x1f578; {/* 🔄🕸 */}
              </span>
            </h2>
            <ul className="footer-links">
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
                  href={`https://gitlab.com/${siteMetadata.gitlab.substring(
                    1
                  )}`}
                >
                  <span>
                    <FontAwesomeIcon icon={faGitlab} />
                  </span>
                  {` `}
                  {siteMetadata.gitlab} on&nbsp;gitlab
                </a>
              </li>

              <li>
                <a
                  href={`https://github.com/${siteMetadata.github.substring(
                    1
                  )}`}
                >
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  {` `}
                  {siteMetadata.github} on&nbsp;github
                </a>
              </li>

              <li>
                <a
                  href={`https://keybase.io/${siteMetadata.keybase.substring(
                    1
                  )}`}
                >
                  <span>
                    <FontAwesomeIcon icon={faKeybase} />
                  </span>
                  {` `}
                  {siteMetadata.keybase} on&nbsp;keybase
                </a>
              </li>

              <li>
                <a
                  rel="me"
                  href={`https://mastodon.social/${siteMetadata.mastodon.substring(
                    0,
                    6
                  )}`}
                >
                  <span>
                    <FontAwesomeIcon icon={faMastodon} />
                  </span>
                  {` `}
                  {siteMetadata.mastodon}
                </a>
              </li>
            </ul>

            <h2
              style={{
                marginBottom: 0,
              }}
            >
              Keep on Readin’ On
            </h2>
            <h2
              style={{
                marginTop: 0,
              }}
            >
              <span role="img" aria-label="open book books">
                &#x1f4d6;&#x1f4da; {/* 📖📚 */}
              </span>
            </h2>

            <figure
              className="needs-img-bkd"
              style={{
                marginTop: rhythm(3 / 2),
              }}
            >
              <a
                href="https://readtheprintedword.org"
                style={{
                  display: `block`,
                }}
              >
                <img
                  src="https://readtheprintedword.org/rtpw-button4-200x92white.png"
                  alt="Read the Printed Word!"
                  width="100"
                  height="46"
                />
                <br />
                <span>
                  <FontAwesomeIcon icon={faBook} />
                </span>
                {` `}
                &nbsp;Read the Printed&nbsp;Word
              </a>
            </figure>

            <h2
              style={{
                marginBottom: 0,
                marginTop: rhythm(3.125),
              }}
            >
              Support
            </h2>
            <figure
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <figcaption
                style={{
                  marginTop: 0,
                }}
              >
                Knowledge for Everyone
              </figcaption>
            </figure>
            <h2
              style={{
                marginTop: 0,
              }}
            >
              <span role="img" aria-label="brain globe with meridians">
                &#x1f9e0;&#x1F310; {/* 🧠🌐 */}
              </span>
            </h2>

            <ul>
              <li>
                <article>
                  <figure>
                    <a
                      className="links-icon"
                      href="https://wikitech.wikimedia.org/wiki/Main_Page"
                      style={{
                        backgroundImage: `url(${wikicorn})`,
                        backgroundSize: `96px`,
                        minHeight: `134px`,
                        paddingTop: `96px`,
                      }}
                    >
                      <h3>
                        <span>
                          <FontAwesomeIcon icon={faWikipediaW} />
                        </span>
                        {` `}
                        &nbsp;Wikitech
                      </h3>
                    </a>
                    <figcaption>
                      <h3
                        style={{
                          marginTop: rhythm(1 / 8),
                        }}
                      >
                        &#8230;and the entire{` `}
                        <em>
                          <a href="https://meta.wikimedia.org/wiki/Wikimedia_movement">
                            movement
                          </a>
                        </em>
                        {` `}
                        around{` `}
                        <a href="https://www.wikimedia.org/">Wikimedia</a>
                      </h3>
                      Technical Collective Educational Content&nbsp;Development
                    </figcaption>
                  </figure>
                </article>
              </li>

              <li>
                <article>
                  <figure className="needs-img-bkd">
                    <a
                      className="links-icon"
                      href="https://archive.org"
                      style={{
                        backgroundImage: `url(${ialogo})`,
                        backgroundSize: `96px`,
                        minHeight: `96px`,
                        paddingTop: `96px`,
                      }}
                    ></a>
                    <a href="https://archive.org">
                      <h3>
                        <span>
                          <FontAwesomeIcon icon={faArchive} />
                        </span>
                        {` `}
                        &nbsp;Internet Archive
                      </h3>
                    </a>
                    <figcaption>
                      Search millions of free books, movies, software, music,
                      and
                      {` `}
                      the history of hundreds of billions of web&nbsp;pages.
                      <br />
                      <small>
                        (Image source:
                        {` `}
                        <a href="https://commons.wikimedia.org/wiki/File:Internet_Archive_logo_and_wordmark.svg">
                          Wikimedia Commons
                        </a>
                        )
                      </small>
                    </figcaption>
                  </figure>
                </article>
              </li>

              <li>
                <article>
                  <figure className="mw256 needs-img-bkd">
                    <a
                      className="links-icon"
                      href="https://developer.mozilla.org/en-US/docs/Web"
                      style={{
                        backgroundImage: `url(${mdnDark})`,
                        backgroundSize: `256px`,
                        minHeight: `48px`,
                        paddingTop: `48px`,
                      }}
                    ></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web">
                      <h3>
                        <span>
                          <FontAwesomeIcon icon={faFirefox} />
                        </span>
                        {` `}
                        &nbsp;Mozilla Developer Network
                      </h3>
                    </a>
                    <figcaption>Open Web Technology&nbsp;Resource</figcaption>
                  </figure>
                </article>
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    )
  }
}

export default LinksPage

export const LinksQuery = graphql`
  {
    site {
      siteMetadata {
        github
        gitlab
        keybase
        mastodon
      }
    }
  }
`
