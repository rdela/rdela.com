import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";
import redirects from "lume/plugins/redirects.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume();

site
  .use(xeo())
  .use(redirects({
    output: "netlify",
  }))
  .use(relativeUrls())
  .use(transformImages())
  .add("img");

export default site;
