import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Footer from '../components/Footer'
import Masthead from '../components/Masthead'

import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

import '../css/prism/prism-day-after-tomorrow.css'
import './layout.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            author
            description
            email
            github
            siteURL
            title
            twitter
          }
        }
      }
    `}
    render={(data) => (
      <div className="page-container">
        <Masthead
          description={data.site.siteMetadata.description}
          siteTitle={data.site.siteMetadata.title}
          siteTwitter={data.site.siteMetadata.twitter}
          siteURL={data.site.siteMetadata.siteURL}
        />
        {children}
        <hr />
        <footer>
          <Footer
            author={data.site.siteMetadata.author}
            siteEmail={data.site.siteMetadata.email}
            siteGithub={data.site.siteMetadata.github}
            siteTitle={data.site.siteMetadata.title}
            siteURL={data.site.siteMetadata.siteURL}
          />
        </footer>
      </div>
    )}
  />
)
