## rdela.com

Repo background & history:

### [Credits](https://rdela.com/credits/)
<https://rdela.com/credits/>

[Markdown source](src/pages/credits/index.md): src/pages/credits/index.md


&nbsp;


## Deploy settings

### Netlify / ENV vars

```toml
[build]
  command = "gatsby build"
  publish = "public"

[template.environment]
  NODE_ENV = "production"
  NODE_VERSION = "node"
```


https://www.netlify.com/blog/2016/08/30/introducing-deploy-contexts-in-netlify/


https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/


https://www.netlify.com/docs/continuous-deployment/#deploy-contexts

> Set a NODE_VERSION environment variable.
> You can set this as a variable in the build environment either
while linking the repository or afterward from the site settings screen
in our UI. The value inside can be anything you would use with nvm.


https://github.com/creationix/nvm

> In place of a version pointer like "0.10" or "5.0" or "4.2.1",
you can use the following special default aliases
> `node: this installs the latest version of node`


&nbsp;


## License

https://docs.npmjs.com/files/package.json#license

> You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

> If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:

> `{ "license" : "SEE LICENSE IN <filename>" }`


[OpenBSD license](https://en.wikipedia.org/wiki/ISC_license#OpenBSD_license)
in [license.txt](license.txt)


> Consider also setting "private": true to prevent accidental publication.

[package.json#L52-L53](package.json#L52-L53)

```json
{
	"license" : "SEE LICENSE IN license.txt",
	"private": true,
}
```


