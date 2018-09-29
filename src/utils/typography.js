const Typography = require('typography')
let theme = require('typography-theme-github').default
const CodePlugin = require('typography-plugin-code').default

// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js

theme.plugins = [new CodePlugin()]

theme.baseFontSize = '18px'
theme.baseLineHeight = '1.8125'

theme.headerFontFamily = [
  'Source Sans Pro',
  '-apple-system',
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
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

/*
colors:

Light Slate Blue
hsl(252,96%,76%)

Light Sky Blue
hsl(206,96%,76%)

according to:
http://www.color-blindness.com/color-name-hue/
https://github.com/gatsbyjs/gatsby/pull/3639#issuecomment-359263286
*/

theme.overrideThemeStyles = () => ({
  body: {
    color: 'hsla(0,0%,100%,0.8)',
    backgroundColor: '#000',
  },
  a: {
    color: 'hsl(252,96%,76%)',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    color: 'hsl(252,56%,56%)',
    textDecoration: 'none',
  },
  'h1,h2': {
    borderBottom: '0',
  },
  h3: {
    lineHeight: `1.25`,
  },
  hr: {
    backgroundColor: `hsla(252,96%,76%,.38)`,
    marginBottom: `1.8125rem`,
    marginTop: `1.8125rem`,
  },
  blockquote: {
    color: `hsla(0,0%,100%,0.72)`,
    borderLeft: `4px solid hsla(252,96%,76%,0.38)`,
    marginBottom: `1.625rem`,
  },
  figcaption: {
    fontSize: `.875rem`,
    fontStyle: `italic`,
    marginTop: `0.3125rem`,
    textAlign: `center`,
  },
  'h4, h5, h6': {
    textTransform: `uppercase`,
  },
  code: {
    fontSize: `1rem`,
  },
  'code, kbd, pre, samp, tt': {
    fontFamily: `'Source Code Pro','SFMono-Regular','Consolas','Roboto Mono',
      'Droid Sans Mono','Liberation Mono','Menlo','Monaco','Courier',monospace`,
  },
  footer: {
    fontSize: `0.888888889rem`,
  },
  small: {
    fontSize: `0.833333333rem`,
  },
  '.post-update': {
    marginBottom: `3.625rem`,
    marginTop: `1.8125rem`,
  },
  '.bio-links': {
    display: `flex`,
    flexWrap: `wrap`,
    alignItems: `center`,
    justifyContent: `left`,
    margin: `0 0 4.53125rem`,
  },
  '.bio-links li': {
    listStyle: `none`,
    display: `inline-block`,
    marginBottom: `1.13281rem`,
    marginRight: `1.13281rem`,
  },
  '.bio-links span': {
    width: `1rem`,
    height: `0.888888889rem`,
    lineHeight: `0.888888889rem`,
    display: `inline-block`,
    verticalAlign: `baseline`,
  },
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

module.exports = typography
