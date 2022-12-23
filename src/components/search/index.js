import algoliasearch from 'algoliasearch/lite'
import React, { createRef, useMemo, useState } from 'react'
import {
  connectStateResults,
  Index,
  InstantSearch,
} from 'react-instantsearch-dom'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import Hits from './Hits'
import Input from './Input'
import { HitsWrapper, PoweredBy, Root } from './styles'

/*
Dank search using
https://github.com/algolia/gatsby-plugin-algolia
https://github.com/algolia/react-instantsearch

Inspired by and derived from Janosh’s example
https://github.com/janosh/janosh.io/tree/master/src/components/Search
https://janosh.io/blog/gatsby-algolia-search
https://github.com/algolia/gatsby-plugin-algolia/issues/24
https://www.gatsbyjs.org/docs/adding-search-with-algolia/
*/

const Results = connectStateResults(
  ({ searching, searchState: state, searchResults: res }) =>
    (searching && <div>Searching...</div>) ||
    (res && res.nbHits === 0 && (
      <div>No results for &apos;{state.query}&apos;</div>
    ))
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default function Search({ indices, collapse, centerHits, hitsAbove }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  // useMemo prevents the searchClient from being recreated on every render.
  // Avoids unnecessary XHR requests (see https://github.com/algolia/gatsby-plugin-algolia/issues/24#issuecomment-518793812).
  const searchClient = useMemo(
    () => algoliasearch(appId, searchKey),
    [appId, searchKey]
  )
  useOnClickOutside(ref, () => setFocus(false))
  return (
    <Root ref={ref}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
        <HitsWrapper
          show={query.length > 0 && focus}
          centerHits={centerHits}
          hitsAbove={hitsAbove}
        >
          {indices.map(({ name, title, type }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results />
              <Hits type={type} onClick={() => setFocus(false)} />
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    </Root>
  )
}
