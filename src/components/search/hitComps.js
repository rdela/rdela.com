import React from 'react' // , { Fragment }
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import { CalendarIcon } from './styles'

// import { Tags } from "styled-icons/fa-solid/Tags"

// export const PageHit = clickHandler => ({ hit }) => (
//   <div>
//     <Link to={hit.slug} onClick={clickHandler}>
//       <h4>
//         <Highlight attribute="title" hit={hit} tagName="mark" />
//       </h4>
//     </Link>
//     <Snippet attribute="excerpt" hit={hit} tagName="mark" />
//   </div>
// )

export const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div className="hit-date">
      <CalendarIcon size="1em" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      {/* &emsp;
      <Tags size="1em" />
      &nbsp;
      {hit.tags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && `, `}
          {tag}
        </Fragment>
      ))} */}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
