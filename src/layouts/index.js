import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import Bio from '../components/Bio'
import Masthead from '../components/Masthead'

import knot from '../svg/rdela-knot.svg'

import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

import "../css/prism/prism.css"

class Template extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDesc = this.props.data.site.siteMetadata.description
    const { location, children } = this.props

    let header, footer

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      ;(header = (
        <Masthead isHome={true} title={siteTitle} />
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
              <Bio isHome={true} />
            </div>
          </footer>
        ))
    } else {
      header = (
        <Masthead isHome={false} title={siteTitle}  />
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
            <Bio />
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
        title
        author
      }
    }
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1440 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
