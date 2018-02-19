import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'

import Bio from '../components/Bio'
import knot from '../svg/rdela-knot.svg'
import ialogo from '../svg/Internet_Archive_logo_and_wordmark.svg'
import wikicorn from '../svg/wikicorn.svg'
import mdnDark from '../svg/mdn-dark.svg'

class LinksPage extends React.Component {
  render() {
    return (
      <main role="main">
        <Helmet title={`Links Page 🔗📄`}>
          <meta name="description" content="Support Knowledge for Everyone" />
        </Helmet>
        <h1>Links Page 🔗📄</h1>

        <section
          style={{
            textAlign: `center`,
          }}
        >
          <div>
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
            <p>&#x1F310;</p>
          </div>
          <ul
            style={{
              listStyle: `none`,
              marginLeft: 0,
            }}
          >
            <li
              style={{
                marginBottom: rhythm(1.5),
              }}
            >
              <article>
                <figure>
                  <div>
                    <a
                      href="https://wikitech.wikimedia.org/wiki/Main_Page"
                      style={{
                        display: `block`,
                        width: `100%`,
                        height: `128px`,
                        backgroundImage: `url(${wikicorn})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `96px`,
                        backgroundPosition: `center top`,
                        paddingBottom: 0,
                        paddingTop: `96px`,
                        marginBottom: rhythm(1 / 8),
                        marginLeft: `auto`,
                        marginRight: `auto`,
                        marginTop: rhythm(1),
                      }}
                    >
                      <h3
                        style={{
                          marginTop: rhythm(1 / 4),
                        }}
                      >
                        Wikitech
                      </h3>
                    </a>
                  </div>
                  <figcaption>
                    <h3
                      style={{
                        marginTop: rhythm(1 / 8),
                      }}
                    >
                      &#8230;and the entire{' '}
                      <em>
                        <a href="https://meta.wikimedia.org/wiki/Wikimedia_movement">
                          movement
                        </a>
                      </em>{' '}
                      around <a href="https://www.wikimedia.org/">Wikimedia</a>
                    </h3>
                    Technical Collective Educational Content&nbsp;Development
                  </figcaption>
                </figure>
              </article>
            </li>

            <li
              style={{
                marginBottom: rhythm(1.5),
              }}
            >
              <article>
                <figure>
                  <div>
                    <a
                      href="https://archive.org"
                      style={{
                        display: `block`,
                        width: `100%`,
                        height: `128px`,
                        backgroundImage: `url(${ialogo})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `96px`,
                        backgroundPosition: `center top`,
                        paddingBottom: 0,
                        paddingTop: `96px`,
                        marginBottom: rhythm(1 / 8),
                        marginLeft: `auto`,
                        marginRight: `auto`,
                        marginTop: rhythm(1),
                      }}
                    >
                      <h3
                        style={{
                          marginTop: rhythm(1 / 4),
                        }}
                      >
                        Internet Archive
                      </h3>
                    </a>
                  </div>
                  <figcaption>
                    Search millions of free books, movies, software, music, and{` `}
                    the history of hundreds of billions of web&nbsp;pages.
                    <br />
                    <small>
                      (Image source:{` `}
                      <a href="https://commons.wikimedia.org/wiki/File:Internet_Archive_logo_and_wordmark.svg">
                        Wikimedia Commons
                      </a>
                      )
                    </small>
                  </figcaption>
                </figure>
              </article>
            </li>

            <li
              style={{
                marginBottom: rhythm(1.5),
              }}
            >
              <article>
                <figure>
                  <div>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web"
                      style={{
                        display: `block`,
                        width: `100%`,
                        height: `80px`,
                        backgroundImage: `url(${mdnDark})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `256px`,
                        backgroundPosition: `center top`,
                        paddingBottom: 0,
                        paddingTop: `48px`,
                        marginBottom: rhythm(1 / 8),
                        marginLeft: `auto`,
                        marginRight: `auto`,
                        marginTop: rhythm(1),
                      }}
                    >
                      <h3
                        style={{
                          marginTop: rhythm(1 / 4),
                        }}
                      >
                        Mozilla Developer Network
                      </h3>
                    </a>
                  </div>
                  <figcaption>Open Web Technology&nbsp;Resource</figcaption>
                </figure>
              </article>
            </li>
          </ul>
        </section>
      </main>
    )
  }
}

export default LinksPage
