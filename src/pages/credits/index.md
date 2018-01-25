---
title: Credits
date: "2018-01-22"
excerpt: "How I began devloping this site"
image: "In_happy_far-away_land_1902_14752942545.jpg"
---

<figure>
<img src="In_happy_far-away_land_1902_14752942545.jpg"
     alt="In happy far-away land (1902)" />
<figcaption>
In happy far-away land (1902)<br />
<small>(Image source: <a href="https://commons.wikimedia.org/wiki/File:In_happy_far-away_land_(1902)_(14752942545).jpg">Wikimedia&nbsp;Commons</a>)</small>
</figcaption>
</figure>

&nbsp;

Welcome to the new rdela. I will be your host, Ricky de Laveaga.

I began devloping this site with [GatsbyJS](https://www.gatsbyjs.org/)
by running [^1] a

```sh
git clone
```

…of
[Gatsby Blog&nbsp;Starter](https://github.com/gatsbyjs/gatsby-starter-blog).
GBS, or `gatsby-starter-blog`, has [Typography.js](https://github.com/KyleAMathews/typography.js)
bundled, whose
[demo&nbsp;playground](https://kyleamathews.github.io/typography.js/)
is a fun way to noodle out a proto*__type__ design*.

Anyhoo, as of this post I am using a slightly modified version of the
[Github&nbsp;theme](https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-github).
After much staring at the screen and tweaking CSS, had to include the inimitable
[Source Serif](https://typekit.com/fonts/source-serif)
by [Frank Grießhammer](https://typekit.com/designers/frank-griesshammer),
[Source Sans](https://typekit.com/fonts/source-sans)
by [Paul D. Hunt](https://typekit.com/designers/paul-d-hunt),
and
[Source Code Pro](https://typekit.com/fonts/source-sans)
by [Paul D. Hunt](https://typekit.com/designers/paul-d-hunt) and
[Teo Tuominen](https://typekit.com/designers/teo-tuominen). All 3 are
part of the [*Adobe Originals*](https://blog.typekit.com/category/making-type/) series.

I cannot neglect to *issue* a hearty thanks to all of the
[Gatsby GitHub people](https://github.com/gatsbyjs/gatsby/graphs/contributors)
along with all of the [reactjs.org](https://reactjs.org/) authors and
[contributors](https://github.com/reactjs/reactjs.org/graphs/contributors).
For solid examples of common patterns in Gatsby and React, the
[reactjs.org repo](https://github.com/reactjs/reactjs.org) and
[gatsbyjs.org code](https://github.com/gatsbyjs/gatsby/tree/master/www)
are both superb open learning resources in the wild.
[bricolage.io](https://www.bricolage.io/) by
[Kyle Mathews](https://github.com/KyleAMathews/blog)
is maybe less generally useful while also being more approachable and
especially helpful to me in putting this together.

As an instant bonus for reading all the way down, I give you…[*the __F…B…I__*](https://www.youtube.com/watch?v=JI5gblI82rg)

<iframe width="720" height="405" src="https://www.youtube.com/embed/JI5gblI82rg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

…Or the [links page](/l) may be of interest.


&nbsp;


[^1]: Having already installed `gatsby-cli`, One could run: <br /> `gatsby new nameOfSiteHere https://github.com/gatsbyjs/gatsby-starter-blog` <br /> …in the terminal instead of a `git clone` of the [`gatsby-starter-blog`](https://github.com/gatsbyjs/gatsby-starter-blog) repo like I did, which then needs to be followed by a `yarn` or `npm install` before running `gatsby develop` for the first time. The [Gatsby Docs](https://www.gatsbyjs.org/docs/) start with the `gatsby new` command which takes care of this initial package install. (For more on `git` and cloning, see [git-clone docs](https://www.git-scm.com/docs/git-clone).) The source of the `gatsby new` command is split between [create-cli.js](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/create-cli.js#L183) and [init-starter.js](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/init-starter.js) in the Gatsby repo.

