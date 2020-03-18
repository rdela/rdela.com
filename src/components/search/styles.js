import React from 'react'
import styled, { css } from 'styled-components'
import { Algolia } from '@styled-icons/fa-brands'
import { Search } from '@styled-icons/fa-solid'

const amethystSmoke = `hsl(252,16%,64%)`
const amethystSmokeDiaphanous = `hsl(252,16%,64%,0.7)`
const amethystSmokeGossamer = `hsl(252,16%,64%,0.1)`
const background = `hsl(252, 2%, 10%)`
const backgroundFocus = `hsl(252, 2%, 16%)`
const blackRussian = `hsl(252, 96%, 8%)`
const bodyColor = `hsla(252,2%,100%,0.8)`
const bodyColorDimmed = `hsla(252,2%,100%,0.4)`
const heliotrope = `hsl(252,96%,76%)`
const heliotropeDiaphanous = `hsla(252,96%,76%,0.38)`
const neonPink = `hsl(329, 100%, 77%)`

const borderRadiusSmall = `0.2rem`
const transShort = `0.3s`

const searchBoxWidth = `8.445rem`

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`

const focus = css`
  background-color: ${backgroundFocus};
  color: ${bodyColor};
  cursor: text;
  width: ${searchBoxWidth};
  + ${SearchIcon} {
    color: ${amethystSmoke};
    margin: 0.3em 0.4em;
  }
  ::placeholder {
    color: ${amethystSmokeDiaphanous};
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${background};
  + ${SearchIcon} {
    color: ${heliotrope};
  }
  ::placeholder {
    color: ${bodyColorDimmed};
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.8rem` : `-1rem`)};
  padding-left: ${props => (props.focus ? `1.8rem` : `1rem`)};
`

const expand = css`
  background-color: ${background};
  color: ${heliotrope};
  width: ${searchBoxWidth};
  margin-left: -1.8em;
  padding-left: 1.8em;
  + ${SearchIcon} {
    color: ${heliotrope};
    margin: 0.3em 0.4em;
  }
  ::placeholder {
    color: ${heliotrope};
  }
  ${props => props.focus && focus}
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${transShort};
  border-radius: ${borderRadiusSmall};
  ${props => (props.collapse ? collapse : expand)};
`

const hitsList = css`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  margin: 0 auto;
  padding: 0.7em 1em 0.4em;
  border-radius: ${borderRadiusSmall};
  > * + * {
    padding-top: 0.7em !important;
    border-top: 2px solid ${heliotropeDiaphanous};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${heliotropeDiaphanous};
  }
`

const hitsGrid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;
    li {
      padding: 0.3em 0.5em;
      border-radius: ${borderRadiusSmall};
    }
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  background-color: ${background};
  color: ${bodyColor};
  text-align: left;
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  ${props => (props.asGrid ? hitsGrid : hitsList)};
  * {
    margin-top: 0;
    padding: 0;
  }
  a {
    color: ${heliotrope};
  }
  a:hover,
  a:active {
    color: ${amethystSmoke};
  }
  ul {
    list-style: none;
    margin-left: 0;
  }
  mark {
    color: ${neonPink};
    background-color: ${blackRussian};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: ${amethystSmokeDiaphanous};
      background-color: ${amethystSmokeGossamer};
      padding: 0.1em 0.4em;
      border-radius: ${borderRadiusSmall};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

const AlgoliaIcon = styled(Algolia)`
  width: 0.9375rem;
  vertical-align: -0.1875em;
`

export const PoweredBy = () => (
  <span css="font-size: 0.8125rem; line-height: 1.375rem; text-align: center; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com/">
      <AlgoliaIcon size="0.9375rem" /> Algolia
    </a>
  </span>
)
