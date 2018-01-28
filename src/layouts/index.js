import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import Bio from '../components/Bio'
import Masthead from '../components/Masthead'

import knot from '../svg/rdela-knot.svg'

import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

import '../css/prism/prism-tomorrow.css'

class Template extends React.Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const { location, children } = this.props

    let header, footer

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      ;(header = (
        <Masthead
          isHome={true}
          description={siteMetadata.description}
          siteTitle={siteMetadata.title}
          siteTwitter={siteMetadata.twitter}
        />
      )),
        (footer = (
          <footer>
            <hr
              style={{
                marginBottom: rhythm(1),
                marginTop: rhythm(1),
              }}
            />
            <div
              style={{
                display: 'flex',
                marginBottom: rhythm(2.5),
              }}
            >
              <Bio
                isHome={true}
                author={siteMetadata.author}
                siteGithub={siteMetadata.github}
                siteTitle={siteMetadata.title}
                siteTwitter={siteMetadata.twitter}
              />
            </div>
          </footer>
        ))
    } else {
      header = (
        <Masthead
          isHome={false}
          description={siteMetadata.description}
          siteTitle={siteMetadata.title}
          siteTwitter={siteMetadata.twitter}
        />
      )
      footer = (
        <footer>
          <hr
            style={{
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
            }}
          />
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <Bio
              isHome={false}
              author={siteMetadata.author}
              siteGithub={siteMetadata.github}
              siteTitle={siteMetadata.title}
              siteTwitter={siteMetadata.twitter}
            />
          </div>
        </footer>
      )
    }
    return (
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1 / 2)} ${rhythm(1 / 2)}`,
          margin: `${rhythm(1 / 2)} auto`,
        }}
      >
        {header}
        {children()}
        {footer}
      </div>
    )
  }
}

export default Template

export const defaultTemplateQuery = graphql`
  query defaultTemplate {
    site {
      siteMetadata {
        author
        description
        github
        siteUrl
        title
        twitter
      }
    }
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
