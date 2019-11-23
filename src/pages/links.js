import React from 'react'
import { Helmet } from 'react-helmet'

import { rhythm } from '../utils/typography'
// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBook } from '@fortawesome/free-solid-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW'
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox'
// https://fontawesome.com/icons?d=gallery

import Layout from '../components/layout'
import ialogo from '../svg/internet-archive-inv.svg'
import wikicorn from '../svg/wikicorn.svg'
import mdnDark from '../svg/mdn.svg'

class LinksPage extends React.Component {
  render() {
    const metaDesc = `Support Knowledge for Everyone`

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
              🔗📄
            </span>
          </h1>

          <section className="links">
            <figure
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

            <h1
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              Support
            </h1>
            <figure
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <figcaption>Knowledge for Everyone</figcaption>
            </figure>
            <p>
              <span role="img" aria-label="globe with meridians">
                &#x1F310;
              </span>
            </p>

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
                        minHeight: `134px`,
                        paddingTop: `96px`,
                      }}
                    >
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
                        minHeight: `86px`,
                        paddingTop: `48px`,
                      }}
                    >
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
