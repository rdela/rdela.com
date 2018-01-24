const Typography = require("typography")
let theme = require("typography-theme-github").default
const CodePlugin = require("typography-plugin-code").default

theme.plugins = [new CodePlugin()]

theme.baseFontSize = '18px'

theme.headerFontFamily = [
    'Source Sans Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ]

theme.bodyFontFamily = [
    'Source Serif Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
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
    color: 'hsl(206,96%,76%)',
    textDecoration: 'none',
  },
  'h1,h2': {
    borderBottom: '0',
  },
  hr: {
    backgroundColor: `hsla(206,96%,76%,.38)`,
  },
  blockquote: {
    color: `hsla(0,0%,0%,0.72)`,
    borderLeft: `4px solid hsla(206,96%,76%,0.38)`,
    marginBottom: `1.625rem`,
  },
  figcaption: {
    fontStyle: `italic`,
    textAlign: `center`,
  },
  'h4, h5, h6': {
    textTransform: `uppercase`,
  },
  code: {
    fontSize: `1rem`,
  },
  'code, kbd, pre, samp': {
    fontFamily: `'Source Code Pro','Menlo','Monaco',monospace`,
  },
  'small': {
    fontSize: `0.875rem`,
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

module.exports = typography
