import React from 'react'
import { navigate } from 'gatsby'

// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import PaginationLink from './PaginationLink'

class Pagination extends React.Component {
// eslint-disable-next-line
  changePage = e => {
    navigate(e.target.value ? `/page/${e.target.value}` : `/`)
  }
  render() {
    const { numPages, currentPage } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPageNum =
      currentPage - 1 === 1 ? `` : `page/${(currentPage - 1).toString()}`
    const nextPageNum = (currentPage + 1).toString()
    const prevPageLink = isFirst ? null : `/${prevPageNum}`
    const nextPageLink = isLast ? null : `/page/${nextPageNum}`
    const linkColor = `hsl(252,96%,76%)`

    const prevNextLinkStyles = {
      '&&': {
        borderBottom: 0,
      },
    }

    return (
      <div
        className="pagination"
        style={{
          background: `transparent`,
          display: `flex`,
          flexDirection: `column`,
          fontFamily: `Source Sans Pro, -apple-system, Segoe UI, Helvetica, Arial, Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
          fontSize: `0.9375rem`,
          justifyContent: `space-between`,
          margin: `0 -0.6875rem`,
          padding: `1.5rem 1.5rem 0`,
          textTransform: `uppercase`,
        }}
      >
        <div
          className="pagination-inner"
          style={{
            display: `flex`,
            fontWeight: `600`,
            margin: `0 0 1.25rem`,
            padding: `0`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <PaginationLink to={prevPageLink} style={prevNextLinkStyles}>
            <span className="iconbox">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            {` `}
            Newer posts
          </PaginationLink>
          <PaginationLink to={nextPageLink} style={prevNextLinkStyles}>
            Older posts{` `}
            <span className="iconbox">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </PaginationLink>
        </div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `flex-end`,
          }}
        >
          <span>Showing page &nbsp;</span>
          <select
            value={currentPage === 1 ? `` : currentPage.toString()}
            onChange={this.changePage}
            style={{
              backgroundColor: `#000`,
              border: `none`,
              borderRadius: `0.5ch`,
              color: linkColor,
              fontWeight: `bold`,
              padding: `0.5ch 2ch 0.5ch 0.5ch`,
              WebkitAppearance: `none`,
              MozAppearance: `none`,
              appearance: `none`,
            }}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <option
                value={`${i === 0 ? `` : i + 1}`}
                key={`pagination-number${i + 1}`}
              >
                {i + 1}
              </option>
            ))}
          </select>
          <span
            style={{
              marginRight: `-0.5rem`,
            }}
            className="iconbox"
          >
            <FontAwesomeIcon
              style={{
                color: linkColor,
                fontSize: `0.75rem`,
                pointerEvents: `none`,
                position: `relative`,
                right: `0.8125rem`,
              }}
              icon={faChevronDown}
            />
          </span>
          <span>of &nbsp;</span>
          <span>{numPages}</span>
        </div>
      </div>
    )
  }
}

export default Pagination
