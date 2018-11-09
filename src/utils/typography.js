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

/*
Colors:

hsl(252,96%,76%)
#9f87fd
Heliotrope - http://chir.ag/projects/name-that-color/#9E86FD
Light Slate Blue - https://color-blindness.com/color-name-hue
Contrast ratio to #000 - AAA
7.35 - Chrome devtools
7.36 - https://colorable.jxnblk.com/9f87fd/000000, Contrast app

hsl(252,16%,64%)
#9b95b2
Amethyst Smoke - http://chir.ag/projects/name-that-color/#9b95b2
Logan - https://color-blindness.com/color-name-hue
Contrast ratio to #000 - AAA
7.34 - Chrome devtools, https://colorable.jxnblk.com/9b95b2/000000, Contrast app

Colorable made by Jxnblk (Brent Jackson)
https://colorable.jxnblk.com/
“If one says ‘Red’ (the name of the color) and there are 50 people listening,
it can be expected that there will be 50 reds in their minds. And one can be
sure that all these reds will be very different.”
– Josef Albers

Color Name & Hue | Colblindor
https://www.color-blindness.com/color-name-hue/
Found via: https://github.com/gatsbyjs/gatsby/pull/3639#issuecomment-359263286
See also: http://chir.ag/projects/name-that-color/ (more accurate color names)

Color and contrast | Accessible Styles | Web Fundamentals | Google Developers
https://developers.google.com/web/fundamentals/accessibility/accessible-styles#color_and_contrast

Contrast app – Guide
https://usecontrast.com/guide
*/

theme.overrideThemeStyles = () => ({
  body: {
    backgroundColor: 'hsl(252,0%,0%)',
  },
  a: {
    color: 'hsl(252,96%,76%)',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    color: 'hsl(252,16%,64%)',
    textDecoration: 'none',
  },
  blockquote: {
    borderLeft: '4px solid hsla(252,96%,76%,0.38)',
    marginBottom: '1.625rem',
  },
  'blockquote, h6': {
    color: 'hsla(252,0%,100%,0.72)',
  },
  code: {
    fontSize: '1rem',
  },
  'code, kbd, pre, samp, tt': {
    fontFamily: `'Source Code Pro','SFMono-Regular','Consolas','Roboto Mono', 'Droid Sans Mono','Liberation Mono','Menlo','Monaco','Courier',monospace`,
  },
  figcaption: {
    fontSize: '.875rem',
    fontStyle: 'italic',
    marginTop: '0.3125rem',
    textAlign: 'center',
  },
  footer: {
    fontSize: '0.888888889rem',
  },
  'h1,h2': {
    borderBottom: '0',
  },
  h3: {
    lineHeight: '1.25',
  },
  'h4, h5, h6': {
    textTransform: 'uppercase',
  },
  hr: {
    backgroundColor: 'hsla(252,96%,76%,0.38)',
    marginBottom: '1.8125rem',
    marginTop: '1.8125rem',
  },
  small: {
    fontSize: '0.833333333rem',
  },
  '.bio-links': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'left',
    margin: '0 0 4.53125rem',
  },
  '.bio-links li': {
    listStyle: 'none',
    display: 'inline-block',
    marginBottom: '1.13281rem',
    // marginRight: '1.13281rem',
  },
  '.bio-links span': {
    width: '1rem',
    height: '0.888888889rem',
    lineHeight: '0.888888889rem',
    display: 'inline-block',
    verticalAlign: 'baseline',
  },
  '.post-update': {
    marginBottom: '3.625rem',
    marginTop: '1.8125rem',
  },
  '.flex-container': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  '.flex-item': {
    // background: 'tomato',
    textAlign: 'center',
    width: '202px',
    padding: '11px',
  },
  '.flex-item h3': {
    marginTop: 0,
  },
  '.flex-item a': {
    display: 'block',
  },
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

module.exports = typography
