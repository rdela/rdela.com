import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { rhythm } from '../utils/typography'

import Footer from '../components/Footer'
import Masthead from '../components/Masthead'

import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

import '../css/prism/prism-day-after-tomorrow.css'
import './layout.css'

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            author
            description
            email
            github
            gitlab
            mastodon
            siteURL
            title
            twitter
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          maxWidth: rhythm(26),
          padding: `${rhythm(1 / 2)} ${rhythm(1 / 2)}`,
          margin: `${rhythm(1 / 2)} auto`,
        }}
      >
        <Masthead
          description={data.site.siteMetadata.description}
          siteTitle={data.site.siteMetadata.title}
          siteTwitter={data.site.siteMetadata.twitter}
        />
        {children}
        <hr />
        <footer
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
            textAlign: `center`,
          }}
        >
          <Footer
            author={data.site.siteMetadata.author}
            siteEmail={data.site.siteMetadata.email}
            siteGithub={data.site.siteMetadata.github}
            siteGitlab={data.site.siteMetadata.gitlab}
            siteMastodon={data.site.siteMetadata.mastodon}
            siteTitle={data.site.siteMetadata.title}
            siteTwitter={data.site.siteMetadata.twitter}
            siteURL={data.site.siteMetadata.siteURL}
          />
        </footer>
      </div>
    )}
  />
)
