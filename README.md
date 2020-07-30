# expressjs-mw
Expressjs middleware collection

## install
``` shell script
npm i expressjs-mw
```

## Base Usage
```js
let express = require('express');
let app = express();
let mv = require("expressjs-mw")

// 不限制跨域来源
let allowList=[/\.*/]
app.use(mv.crossOrigin.allowedOrigin(allowList))

```

限制跨域来源，使用正则
```js

let allowList= ["www.g.cn", /http:\/\/localhost*/, /\*.github.com/]
app.use(mv.crossOrigin.allowedOrigin(allowList))
```

限制referer来源，使用正则
```js
let allowList= ["www.g.cn", /http:\/\/localhost*/, /\*.github.com/]
app.use(mv.crossOrigin.allowedReferer(allowList))
```

[example](./example/index.js)
