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
          <figure style={{
            marginTop: rhythm(3 / 2),
          }}><a href='https://readtheprintedword.org'><img src='https://readtheprintedword.org/rtpw-button3-200x128.png' alt='Read the Printed Word!' border='0' width='100' height='64' /></a></figure>


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
                  <a
                    href="https://wikitech.wikimedia.org/wiki/Main_Page"
                    style={{
                      backgroundImage: `url(${wikicorn})`,
                      backgroundSize: `96px`,
                      height: `128px`,
                      paddingTop: `96px`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center top`,
                      display: `block`,
                      marginBottom: rhythm(3 / 10),
                      marginLeft: `auto`,
                      marginRight: `auto`,
                      marginTop: rhythm(1),
                      paddingBottom: 0,
                      width: `100%`,
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
                  <a
                    href="https://archive.org"
                    style={{
                      backgroundImage: `url(${ialogo})`,
                      backgroundSize: `96px`,
                      height: `128px`,
                      paddingTop: `96px`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center top`,
                      display: `block`,
                      marginBottom: rhythm(3 / 10),
                      marginLeft: `auto`,
                      marginRight: `auto`,
                      marginTop: rhythm(1),
                      paddingBottom: 0,
                      width: `100%`,
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
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web"
                    style={{
                      backgroundImage: `url(${mdnDark})`,
                      backgroundSize: `256px`,
                      height: `80px`,
                      paddingTop: `48px`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center top`,
                      display: `block`,
                      paddingBottom: 0,
                      marginBottom: rhythm(3 / 10),
                      marginLeft: `auto`,
                      marginRight: `auto`,
                      marginTop: rhythm(1),
                      width: `100%`,
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
