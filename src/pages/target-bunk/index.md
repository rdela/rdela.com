---
title: target=_bunk
slug: Why target=_blank sucks
excerpt: "Respect the back button."
image: "140208-M-NP085-003.jpg"
date: 2020-03-18T21:44:55.735Z
---

<figure>
<img src="140208-M-NP085-003.jpg"
     alt="A black-handed spider monkey hangs from the chain link fence of its enclosure at the Honolulu Zoo, Feb. 10, 2014." /><br />
<figcaption>
Every time you hijack a tab, a monkey gets locked in a cage.&trade;<br />
<small>(Photo source: <a href="https://www.mcbhawaii.marines.mil/News/News-Article-Display/Article/540194/honolulu-zoo-wild-about-giving-back/">Lance Cpl. Suzanna&nbsp;Knotts/U.S. Marine&nbsp;Corps</a>)</small>
</figcaption>
</figure>

Often, while building a website, clients and designers will ask something like:

> Will you make the links open in a new tab so we don’t take people off the site?

I am super against this for various reasons, the main one being that `target=_blank` [breaks the back button](https://news.ycombinator.com/item?id=7040661), the only browser feature most people understand.

[Jakob Nielsen in 2005](https://www.nngroup.com/articles/open-new-windows-for-pdfs/):

> Since 1999, it’s been a firm Web usability guideline to [refrain from opening new browser windows](https://www.nngroup.com/articles/the-top-ten-web-design-mistakes-of-1999) for several reasons:
>
> - When new windows appear that users didn’t ask for, it’s both confusing and disruptive.
> - If the new window completely obscures the old one, many users don’t even realize a new window has opened.
> - Less-technical users can’t manage multiple windows.
> - New windows can defeat users who are [blind or have low vision](https://www.nngroup.com/articles/beyond-accessibility-treating-users-with-disabilities-as-people), as, for example, when a new window opens outside the part of the screen that’s magnified for a low-vision user.
>
> The common rationale designers have for opening new windows is “to keep users on our site,” but that’s bogus reasoning. If people want to leave, they’ll leave. And if they just want to look at the other site, they’ll return to your site by clicking the Back button—the second most used feature on the Web (after hypertext links). In fact, one of the usability problems of opening new windows is that they alter the expected behavior for returning to the previous location.

There are also associated security issues, the upshot being that if you do ever decide to use `target=_blank` you need to also include `rel=noopener` always, and possibly `rel=noreferrer` for older browsers.

[Mathias Bynens](https://mathiasbynens.github.io/rel-noopener/):

> Don’t use `target=_blank` (or any other `target` that opens a new navigation context), especially for links in user-generated content, unless you have [a good reason to](https://css-tricks.com/use-target_blank/).

That last link is to a [solid artice on CSS Tricks](https://css-tricks.com/use-target_blank/) about possible reasons to use it legitimately, like when someone might lose work in progress or there is media playing. Marco Arment provides another example in his 2014 article, [Forcing links to open in new windows: an argument that should have ended 15 years ago](https://marco.org/2014/01/10/target-blank).

For more background on the security issue:

- [Target="_blank" — the most underestimated vulnerability ever](https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c)
- [Phishing by navigating browser tabs](https://sites.google.com/site/bughunteruniversity/nonvuln/phishing-with-window-opener)

So if you do use it anywhere, the link should look like:

```html
<a href="https://www.iana.org/domains/reserved" target="_blank" rel="noopener noreferrer">Example domains</a>
```
