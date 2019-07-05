## rdela.com

Repo background & history:

### [Credits](https://rdela.com/credits/)

[rdela.com/credits](https://rdela.com/credits/)

- [Markdown source](src/pages/credits/index.md)

  [src/pages/credits/index.md](src/pages/credits/index.md)

## Deployment

### Netlify / ENV vars

[netlify.toml](netlify.toml)

```toml
[build]
  command = "gatsby build"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  NODE_VERSION = "--lts"
  NPM_VERSION = "[X.X.X]"
  RUBY_VERSION = "default"
  YARN_FLAGS = "--no-ignore-optional"
  YARN_VERSION = "[X.X.X]"
```

See current [NPM_VERSION](https://github.com/rdela/rdela.com/blob/master/netlify.toml#L8) or [YARN_VERSION](https://github.com/rdela/rdela.com/blob/master/netlify.toml#L11).


#### [Netlify TOML reference](https://www.netlify.com/docs/netlify-toml-reference/)

#### [Netlify > Continuous Deployment > Deploy Contexts](https://www.netlify.com/docs/continuous-deployment/#deploy-contexts)

> To configure deploy contexts, you must create a file called `netlify.toml`
> in the base of your Git repository.

##### [Netlify > Continuous Deployment > Set Node, Ruby, or Python version](https://www.netlify.com/docs/continuous-deployment/#set-node-ruby-or-python-version)

> Set a `NODE_VERSION` environment variable.

> The value inside can be anything you would use with nvm.

#### [Node Version Manager](https://github.com/creationix/nvm/)

##### [NVM > Usage](https://github.com/creationix/nvm/blob/master/README.md#usage)

> In place of a version pointer like "0.10" or "5.0" or "4.2.1",
> you can use the following special default aliases

> `node`: this installs the latest version of `node`

##### [NVM > .nvmrc](https://github.com/creationix/nvm/blob/master/README.md#nvmrc)

> For example, to make nvm default to the latest 5.9 release, the latest LTS version, or the latest node version for the current directory:

```shell
$ echo "5.9" > .nvmrc

$ echo "lts/*" > .nvmrc # to default to the latest LTS version

$ echo "node" > .nvmrc # to default to the latest version
```

#### `NPM_VERSION`

[Netlify Build Image > Tools](https://github.com/netlify/build-image/blob/master/README.md#tools)

> - Version corresponding with Node.js version. (default)
> - Any version available via NPM.

#### `RUBY_VERSION = "default"`

There to appease quirk that begat this lag/error I was seeing in deploy logs:

```
Attempting ruby version 2.2.3, read from environment
** WARNING **
Using custom ruby version 2.2.3, this will slow down the build.
To ensure fast builds, set the RUBY_VERSION environment variable,
or .ruby-version file, to an included ruby version.
Included versions: 2.2.9 2.4.3 2.3.6
```

##### [Netlify > Continuous Deployment > Set Node, Ruby, or Python version](https://www.netlify.com/docs/continuous-deployment/#set-node-ruby-or-python-version)

> We support any released version of Ruby that [rvm](https://github.com/rvm/rvm) understands.

##### [RVM > Switching between ruby versions](https://github.com/rvm/rvm/blob/master/README.md#switching-between-ruby-versions)

> * `default`    - default ruby (or the system ruby if a default hasn't been set)
> * `system`     - system ruby (state before RVM was installed)

#### YARN_FLAGS + YARN_VERSION

See these commits on the Gatsby Netlify CMS starter.

##### [Update netlify.toml](https://github.com/AustinGreen/gatsby-starter-netlify-cms/commit/5c349ced8c4c915c15d322f6fd9ff0e188fd78dd)

##### [Add "--no-ignore-optional" for netlify](https://github.com/AustinGreen/gatsby-starter-netlify-cms/commit/b6cdfce0277cf2d2023cd7427ee32390ce8e419b)

#### Further Reading on Netlify Deployment and ENV vars

##### [Netlify Blog > Introducing Deploy Previews in Netlify](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/)

##### [Netlify Blog > Introducing Deploy Contexts in Netlify](https://www.netlify.com/blog/2016/08/30/introducing-deploy-contexts-in-netlify/)

## License

https://docs.npmjs.com/files/package.json#license

> You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

> If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:

> `{ "license" : "SEE LICENSE IN <filename>" }`

[OpenBSD license](https://en.wikipedia.org/wiki/ISC_license#OpenBSD_license)
in [license.txt](license.txt)

> Consider also setting "private": true to prevent accidental publication.

[package.json#L6-L7](package.json#L6-L7)

```json
{
  "license": "SEE LICENSE IN license.txt",
  "private": true
}
```
