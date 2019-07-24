import React from 'react'
import { Link } from 'gatsby'
import knot from '../svg/rdela-diamond.svg'

class Topknot extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    return (
      <h3 className="topknot">
        <Link tabIndex="0" to={'/'}>
          <span
            style={{
              backgroundImage: `url(${knot})`,
            }}
          >
            {siteTitle}
          </span>
        </Link>
      </h3>
    )
  }
}

export default Topknot
