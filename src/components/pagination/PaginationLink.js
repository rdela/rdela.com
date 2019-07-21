import React from 'react'
import { Link } from 'gatsby'

const PaginationLink = ({ to, children, ...props }) => {
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    )
  }
  return <span style={{ color: `hsl(252,16%,64%)` }}>{children}</span>
}

export default PaginationLink
