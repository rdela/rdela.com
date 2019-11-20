import { Link } from 'gatsby'
import React from 'react' //, { Fragment }
import { connectHits, Highlight, Snippet } from 'react-instantsearch-dom'
import { CalendarIcon } from './styles'
// import { Tags } from 'styled-icons/fa-solid/Tags'

const postHit = hit => (
  <div>
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
)

export default connectHits(function HitComp({ type, hits, onClick }) {
  const extend = { postHit }[type]
  return hits.map(hit => (
    <div key={hit.objectID}>
      <Link to={hit.slug} onClick={onClick}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      {extend && extend(hit)}
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  ))
})
