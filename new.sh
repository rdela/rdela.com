#!/bin/bash

# adapted from/inspiration
# https://github.com/isaacs/blog.izs.me/blob/0d3c0d540655997d8a6a9556e9bc84a3ef95a686/new.sh

# replace substrings and respect word boundaries
# https://stackoverflow.com/a/67374697/379841

# add the 'i' flag to make js regex case insensitive
# https://stackoverflow.com/a/9833430/379841

# clean up whitespace
# https://stackoverflow.com/a/6163180/379841
# https://stackoverflow.com/q/1981349/#comment86593247_1981366

# deal w bash/js quotes
# https://stackoverflow.com/q/1250079

date=$(node -p 'new Date().toISOString()')
title="$*"
if [ -z "$title" ]; then
  read -p "title: " title
fi
trimmed=$(node -p "process.argv[1].replace(/\b(?:a|an|in|of|the|)\b/gi,'').replace(/\s+/g, ' ').trim()" "$title")
slug=$(node -p 'require("lodash").kebabCase(process.argv[1])' "$trimmed")

mkdir -p src/pages/$slug
cat >src/pages/$slug/index.md <<EOF
---
title: ${title}
date: ${date}
excerpt: ""
image: ""
draft: true
---

<figure class="mw848">
<img
  src=""
  alt=""
/>
<figcaption>

</figcaption>
</figure>


EOF
$EDITOR src/pages/$slug/index.md
