import React from 'react'
import Link from 'gatsby-link'

import knot from '../svg/rdela-knot.svg'
import { rhythm, scale } from '../utils/typography'

class Masthead extends React.Component {
  render() {
    const siteTitle = this.props.title
    let pTop = `50px`
    let topknot

    topknot = (
      <h1
        style={{
          ...scale(0.4),
          marginTop: 0,
          marginBottom: rhythm(1 / 2),
        }}
      >
        <span
          style={{
            display: `block`,
            width: `100%`,
            height: `76px`,
            backgroundImage: `url(${knot})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `52px`,
            backgroundPosition: `left top`,
            paddingBottom: 0,
            paddingTop: pTop,
            marginBottom: rhythm(1 / 2),
            marginTop: 0,
          }}
        >
          {siteTitle}
        </span>
      </h1>
    )

    if (this.props.isHome !== true) {
      pTop = `52px`
      topknot = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(1 / 2),
          }}
        >
          <Link to={'/'}>
            <span
              style={{
                display: `block`,
                width: `100%`,
                height: `76px`,
                backgroundImage: `url(${knot})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `52px`,
                backgroundPosition: `left top`,
                paddingBottom: 0,
                paddingTop: pTop,
                marginBottom: rhythm(1 / 2),
                marginTop: 0,
              }}
            >
              {siteTitle}
            </span>
          </Link>
        </h3>
      )
    }

    return <div><header>{topknot}</header></div>
  }
}

export default Masthead

export const mastQuery = graphql`
  query mast {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
