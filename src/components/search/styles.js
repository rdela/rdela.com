import React from 'react'
import styled, { css } from 'styled-components'

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

const searchBoxWidth = `12.125rem`

export const Root = styled.div`
  display: grid;
  grid-gap: 1em;
  position: relative;
`

export const SearchIcon = styled.svg`
  pointer-events: none;
  width: 1em;
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin: 0;
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

const above = css`
  bottom: calc(100% + 0.5em);
`

const below = css`
  top: calc(100% + 0.5em);
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
  margin: 0 auto;
  max-width: 30em;
  padding: 0.7em 1em 0.4em;
  position: absolute;
  ${(props) => (props.centerHits ? `left: 0;` : ``)};
  right: 0;
  ${(props) => (props.hitsAbove ? above : below)};
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
  ${hitsList};
`

const AlgoliaIcon = styled.svg`
  vertical-align: -0.1875em;
  width: 0.75rem;
`

const Powered = styled.span`
  font-size: 0.8125rem;
  line-height: 1.375rem;
  padding: 0;
  text-align: center;
`

export const PoweredBy = () => (
  <Powered>
    Powered by{` `}
    <a href="https://algolia.com/">
      <AlgoliaIcon
        viewBox="0 0 500 500.34"
        height="16px"
        width="16px"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"
        ></path>
      </AlgoliaIcon>
      {` `}
      Algolia
    </a>
  </Powered>
)
