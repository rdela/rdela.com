#!/bin/bash

# adapted from:
# https://github.com/isaacs/blog.izs.me/blob/0d3c0d540655997d8a6a9556e9bc84a3ef95a686/new.sh

date=$(node -p 'new Date().toISOString()')
title="$*"
if [ -z "$title" ]; then
  read -p "title: " title
fi
slug=$(node -p 'require("lodash").kebabCase(process.argv[1])' "$title")

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
$EDITOR src/pages/$d/$slug/index.md
