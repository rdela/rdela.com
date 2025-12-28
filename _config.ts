import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";
import redirects from "lume/plugins/redirects.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";

const site = lume();

site
  .use(xeo())
  .use(redirects({
    output: "netlify",
  }))
  .use(relativeUrls())
  .add("img");

export default site;
