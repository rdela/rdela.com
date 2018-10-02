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

/*
Colors:

hsl(252,96%,76%)
#9f87fd - Chrome devtools + Colorable
Heliotrope - http://chir.ag/projects/name-that-color/#9E86FD
Light Slate Blue - Color Name & Hue | Colblindor
Contrast ratio to #000 - AAA
7.35 - Chrome devtools + https://colorable.jxnblk.com/9f87fd/000000
7.36 - Contrast app

hsl(252,16%,64%)
#9b95b2 - Chrome devtools + Colorable
Amethyst Smoke - http://chir.ag/projects/name-that-color/#9b95b2
Logan - Color Name & Hue | Colblindor
Contrast ratio to #000 - AAA
7.29 - Chrome devtools
7.34 - https://colorable.jxnblk.com/9b95b2/000000 + Contrast app

Colorable made by Jxnblk (Brent Jackson)
https://colorable.jxnblk.com/
“If one says ‘Red’ (the name of the color) and there are 50 people listening, it can be expected that there will be 50 reds in their minds. And one can be sure that all these reds will be very different.”
– Josef Albers

Color Name & Hue | Colblindor
https://www.color-blindness.com/color-name-hue/
Found via: https://github.com/gatsbyjs/gatsby/pull/3639#issuecomment-359263286
See also: http://chir.ag/projects/name-that-color/ (Source of JS code)

Color and contrast | Accessible Styles | Web Fundamentals | Google Developers
https://developers.google.com/web/fundamentals/accessibility/accessible-styles#color_and_contrast

Contrast app – Guide
https://usecontrast.com/guide
*/

theme.overrideThemeStyles = () => ({
  body: {
    color: '#fff',
    color: 'hsla(0,0%,100%,0.8)',
    backgroundColor: '#000',
  },
  a: {
    color: '#9f87fd',
    color: 'hsl(252,96%,76%)',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    color: '#9b95b2',
    color: 'hsl(252,16%,64%)',
    textDecoration: 'none',
  },
  'h1,h2': {
    borderBottom: '0',
  },
  h3: {
    lineHeight: `1.25`,
  },
  hr: {
    color: '#9f87fd',
    backgroundColor: `hsla(252,96%,76%,0.38)`,
    marginBottom: `1.8125rem`,
    marginTop: `1.8125rem`,
  },
  blockquote: {
    color: '#fff',
    color: `hsla(0,0%,100%,0.72)`,
    borderLeft: `#9f87fd`,
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
