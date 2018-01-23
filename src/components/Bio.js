import React from 'react'
import Link from 'gatsby-link'

import knot from '../svg/rdela-knot.svg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    console.log(this.props)
    if (this.props.isHome) {
      console.log(`Bio > isHome: ${this.props.isHome}`)
    }

    let rd

    rd = <strong>Ricky de Laveaga</strong>

    if (this.props.isHome !== true) {
      rd = (
        <Link to="/">
          <strong>Ricky de Laveaga</strong>
        </Link>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Hyperlinked words assembled by <span>{rd}</span>, author of various{` `}
          bug fixes and improvements{` `}
          <a href="https://famebot.com/">
            @famebot
          </a>{` `}
          <br />
          <br />
          <a href="https://twitter.com/rickydelaveaga">
            @rickydelaveaga on twitter
          </a>{` `}
          <br />
          <a href="https://github.com/rdela">@rdela on github</a>{` `}
        </p>
      </div>
    )
  }
}

export default Bio
