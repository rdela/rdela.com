import lume from "lume/mod.ts";
import redirects from "lume/plugins/redirects.ts";
// import relativeUrls from "lume/plugins/relative_urls.ts";
import transformImages from "lume/plugins/transform_images.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site
  .use(xeo({
    // hsl(251.79, 100%, 77.06%)
    colors: {
      hue: 252,
      complement: 72,
      analogous: 29,
      sathi: 100,
      satmid: 70,
      satlo: 30,
      xlight: 92,
      lighter: 84,
      lightness: 72,
      midrange: 64,
      lowmid: 36,
      darkness: 24,
      darker: 6,
    },
  }))
  .add("_redirects")
  .use(redirects({
    output: "netlify",
  }))
  .add("img")
  .add("lyt")
  .add("svg")
  .add("keybase.txt")
  .add(
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.4/src/lite-yt-embed.min.js",
    "lyt/lite-yt-embed.js",
  )
  .add(
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.4/src/lite-yt-embed.min.css",
    "lyt/lite-yt-embed.css",
  )
  .ignore("README.md")
  // .use(relativeUrls()) // https://lume.land/plugins/relative_urls/
  .use(transformImages());

export default site;
