/* eslint-disable */
const Typography = require('typography')
let theme = require('typography-theme-github').default
const CodePlugin = require('typography-plugin-code').default

// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js

theme.plugins = [new CodePlugin()]

theme.baseFontSize = '18px'
theme.baseLineHeight = '1.8125'

theme.bodyColor = 'hsla(252,0%,100%,0.8)'

theme.bodyFontFamily = [
  'Source Serif Pro',
  '-apple-system',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

theme.headerFontFamily = [
  'Source Sans Pro',
  '-apple-system',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

theme.overrideThemeStyles = () => ({
  a: {
    color: 'hsl(252,96%,76%)',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    color: 'hsl(252,16%,64%)',
    textDecoration: 'none',
  },
  'h1,h2': {
    borderBottom: '0',
  },
  blockquote: {
    borderLeft: '4px solid hsla(252,96%,76%,0.38)',
    marginBottom: '1.625em',
  },
  'blockquote, h6': {
    color: 'hsla(252,0%,100%,0.72)',
  },
  hr: {
    backgroundColor: 'hsla(252,96%,76%,0.38)',
    margin: '1.8125em 0',
  },
  small: {
    fontSize: '0.833333333em',
  },
  strong: {
    fontWeight: '700',
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

module.exports = typography
