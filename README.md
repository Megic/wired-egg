# wired-egg

wired egg framework
for from iris-egg 升级sequlize等版本
## QuickStart

```bash
$ npm install wired-egg
```

change app's dependencies:

```js
// {app_root}/index.js
require('wired-egg').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Environment config
```
IRIS_EGG_GRAPHQL: open graphql
IRIS_EGG_APP: open app mode (authenticate by jwt token)
IRIS_EGG_GATEWAY: open gateway mode (authenticate by bearer token)
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

