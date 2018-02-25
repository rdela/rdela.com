## rdela.com

Repo background & history:

### [Credits](https://rdela.com/credits/)

<https://rdela.com/credits/>

[Markdown source](src/pages/credits/index.md): src/pages/credits/index.md

## Deploy settings

### Netlify / ENV vars

```toml
[build]
  command = "npm run build"
  publish = "public"

[template.environment]
  NODE_ENV = "production"
  NODE_VERSION = "node"
  RUBY_VERSION = "default"
  YARN_FLAGS = "--no-ignore-optional"
  YARN_VERSION = "1.3.2"
```

https://www.netlify.com/blog/2016/08/30/introducing-deploy-contexts-in-netlify/

https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/

https://www.netlify.com/docs/continuous-deployment/#deploy-contexts

> Set a NODE_VERSION environment variable.
> You can set this as a variable in the build environment either
> while linking the repository or afterward from the site settings screen
> in our UI. The value inside can be anything you would use with nvm.

https://github.com/creationix/nvm

> In place of a version pointer like "0.10" or "5.0" or "4.2.1",
> you can use the following special default aliases
> […] > `node: this installs the latest version of node`

`RUBY_VERSION` env var is there to appease this lag/error I was seeing in deploy logs…

```
Attempting ruby version 2.2.3, read from environment
** WARNING **
Using custom ruby version 2.2.3, this will slow down the build.
To ensure fast builds, set the RUBY_VERSION environment variable, or .ruby-version file, to an included ruby version.
Included versions: 2.2.9 2.4.3 2.3.6
```

https://www.netlify.com/docs/continuous-deployment/#set-node-ruby-or-python-version

> We support any released version of Ruby that [rvm](https://github.com/rvm/rvm) understands.

[rvm](https://github.com/rvm/rvm):

> To switch between ruby versions you should call

> `rvm use INTERPRETER[-VERSION]`

> Same rules and options apply as for install command with two special interpreters.

> * `default` - default ruby (or the system ruby if a default hasn't been set)
> * `system` - system ruby (state before RVM was installed)

## License

https://docs.npmjs.com/files/package.json#license

> You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

> If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:

> `{ "license" : "SEE LICENSE IN <filename>" }`

[OpenBSD license](https://en.wikipedia.org/wiki/ISC_license#OpenBSD_license)
in [license.txt](license.txt)

> Consider also setting "private": true to prevent accidental publication.

[package.json#L51-L52](package.json#L51-L52)

```json
{
  "license": "SEE LICENSE IN license.txt",
  "private": true
}
```
