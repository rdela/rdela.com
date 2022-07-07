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

const searchBoxWidth = `12.8125rem`

export const Root = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-bottom: 1.1328125rem;
  position: relative;
`

export const SearchIcon = styled(Search)`
  pointer-events: none;
  width: 1em;
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
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
  cursor: pointer;
  color: ${background};
  width: 0;
  + ${SearchIcon} {
    color: ${heliotrope};
  }
  ::placeholder {
    color: ${bodyColorDimmed};
  }
  ${(props) => props.focus && focus}
  margin-left: ${(props) => (props.focus ? `-1.8rem` : `-1rem`)};
  padding-left: ${(props) => (props.focus ? `1.8rem` : `1rem`)};
`

const expand = css`
  background-color: ${background};
  color: ${heliotrope};
  margin-left: -1.8em;
  padding-left: 1.8em;
  width: ${searchBoxWidth};
  + ${SearchIcon} {
    color: ${heliotrope};
    margin: 0.3em 0.4em;
  }
  ::placeholder {
    color: ${heliotrope};
  }
  ${(props) => props.focus && focus}
`

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: ${borderRadiusSmall};
  font-size: 1em;
  outline: none;
  transition: ${transShort};
  ${(props) => (props.collapse ? collapse : expand)};
`

const hitsList = css`
  border-radius: ${borderRadiusSmall};
  left: 0;
  margin: 0 auto;
  max-width: 30em;
  padding: 0.7em 1em 0.4em;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
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
  background-color: ${background};
  color: ${bodyColor};
  display: ${(props) => (props.show ? `grid` : `none`)};
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
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
  mark {
    color: ${neonPink};
    background-color: ${blackRussian};
  }
  max-height: 80vh;
  overflow: scroll;
  text-align: left;
  ul {
    list-style: none;
    margin-left: 0;
  }
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  ${(props) => (props.asGrid ? hitsGrid : hitsList)};
`

const AlgoliaIcon = styled(Algolia)`
  vertical-align: -0.1875em;
  width: 0.9375rem;
`

export const PoweredBy = () => (
  <span css="font-size: 0.8125rem; line-height: 1.375rem; text-align: center; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com/">
      <AlgoliaIcon size="0.9375rem" /> Algolia
    </a>
  </span>
)
