import React from 'react'
import { Link } from 'gatsby'
import knot from '../svg/rdela-diamond.svg'

class Topknot extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    const hideTitle = this.props.hideTitle
    return (
      <Link tabIndex="0" to={`/`}>
        <h1
          className="topknot"
          style={{
            backgroundImage: `url(${knot})`,
          }}
        >
          <span>{hideTitle ? `` : siteTitle}</span>
        </h1>
      </Link>
    )
  }
}

export default Topknot
