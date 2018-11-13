---
title: Credits
date: "2018-01-22"
excerpt: "How I began developing this site"
image: "In_happy_far-away_land_1902_14752942545.jpg"
---

<div style="max-width: 408px; margin: 0 auto"><figure>
<img src="In_happy_far-away_land_1902_14752942545.jpg"
     alt="In happy far-away land (1902)" /><br />
<figcaption>
In happy far-away land (1902)<br />
<small>(Image source: <a href="https://commons.wikimedia.org/wiki/File:In_happy_far-away_land_(1902)_(14752942545).jpg">Wikimedia&nbsp;Commons</a>)</small>
</figcaption>
</figure></div>

<br />

Welcome to the new rdela. I will be your host, Ricky de Laveaga.

I began developing this site with [GatsbyJS](https://www.gatsbyjs.org/)
by running [^gatsby-new] a

```sh
git clone
```

…of
[gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog), the
Gatsby starter for creating a blog
([demo](https://gatsbyjs.github.io/gatsby-starter-blog/)), which has
[Typography.js](https://github.com/KyleAMathews/typography.js)
bundled, whose
[demo&nbsp;playground](https://kyleamathews.github.io/typography.js/)
is a fun way to noodle out a proto<em><strong>type</strong> design</em>.

Anyhoo, as of this post I am using a
[modified version](https://github.com/rdela/rdela.com/blob/master/src/utils/typography.js)
of the
[GitHub&nbsp;theme](https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-github).
After much staring at the screen and tweaking CSS, had to include the inimitable
trio of [Source&nbsp;Serif](https://typekit.com/fonts/source-serif)
by [Frank&nbsp;Grießhammer](https://typekit.com/designers/frank-griesshammer),
[Source&nbsp;Sans](https://typekit.com/fonts/source-sans)
by [Paul&nbsp;D.&nbsp;Hunt](https://typekit.com/designers/paul-d-hunt),
and
[Source&nbsp;Code&nbsp;Pro](https://typekit.com/fonts/source-sans)
by [Paul&nbsp;D.&nbsp;Hunt](https://typekit.com/designers/paul-d-hunt) and
[Teo&nbsp;Tuominen](https://typekit.com/designers/teo-tuominen). All 3 are
part of the [_Adobe Originals_](https://blog.typekit.com/category/making-type/) series.

[Typefaces](https://github.com/KyleAMathews/typefaces) makes
including NPM packages for open source typefaces and self-hosting webfonts
significantly easier. Library author Kyle Mathews explained the motivations
[in&nbsp;January&nbsp;2017](https://www.bricolage.io/typefaces-easiest-way-to-self-host-fonts/).

Though the `git clone` example above hardly does it justice,
gatsby-remark-prismjs ([docs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/), [on&nbsp;GitHub](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs))
makes adding “syntax highlighting to code blocks in markdown files” using
[Prism](https://github.com/PrismJS/prism) a drop-in affair with a line in
[gatsby-config.js](https://github.com/rdela/rdela.com/blob/master/gatsby-config.js#L42)
and another in
[layouts/index.js](https://github.com/rdela/rdela.com/blob/master/src/layouts/index.js#L15).
I have settled on the “prism.js tomorrow night eighties”
[theme](https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-tomorrow.css),
itself based on
[Tomorrow&nbsp;Theme](https://github.com/chriskempson/tomorrow-theme).

I cannot neglect to _issue_ a hearty thanks to all of the
[Gatsby GitHub people](https://github.com/gatsbyjs/gatsby/graphs/contributors)
along with all of the [reactjs.org](https://reactjs.org/) authors and
[contributors](https://github.com/reactjs/reactjs.org/graphs/contributors).
For solid examples of common patterns in Gatsby and React, the
[reactjs.org&nbsp;repo](https://github.com/reactjs/reactjs.org) and
[gatsbyjs.org&nbsp;code](https://github.com/gatsbyjs/gatsby/tree/master/www)
are both superb open learning resources in the wild.
[bricolage.io](https://www.bricolage.io/) by Kyle Mathews
([repo](https://github.com/KyleAMathews/blog))
is maybe less generally useful while also being more approachable and
especially helpful to me in putting this together.

As an instant bonus for reading all the way down, I give you the…

<h3><a href="/l/"><strong>Links</strong> Page <span role="img" aria-label="link symbol page facing up">🔗📄</span></a></h3>

<br />

[^gatsby-new]: Having already installed `gatsby-cli`, One could run: <br />
 `gatsby new nameOfSiteHere https://github.com/gatsbyjs/gatsby-starter-blog` <br />
 …in the terminal instead of a `git clone` of the
 [gatsby-starter-blog repo](https://github.com/gatsbyjs/gatsby-starter-blog)
 like I did, which then needs to be followed by a `yarn` or `npm install` before
 running `gatsby develop` for the first time. The
 [Gatsby&nbsp;Docs](https://www.gatsbyjs.org/docs/) start with the `gatsby new`
 command which takes care of this initial package install. (For more on `git`
 and cloning, see [git-clone docs](https://www.git-scm.com/docs/git-clone).)
 The source of the `gatsby new` command is split between [create-cli.js](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/create-cli.js#L296) and [init-starter.js](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/init-starter.js) in the Gatsby repo.
