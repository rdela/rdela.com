import { Link } from 'gatsby'
import React from 'react'
import { connectHits, Highlight, Snippet } from 'react-instantsearch-dom'

export default connectHits(function HitComp({ hits, onClick }) {
  return hits.map((hit) => (
    <div key={hit.id}>
      <Link to={hit.slug} onClick={onClick}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  ))
})
