'use strict';

let express = require('express');
let app = express();
let mw = require("../index")

// 不限制跨域 Referer
// app.use(mw.crossOrigin.allowedReferer([/\.*/]))

let allowList = [/\.*.github.com/, "www.g.cn", /http:\/\/localhost*/]
// 限制跨域 Referer，使用正则
app.use(mw.crossOrigin.allowedReferer(allowList))

app.all("/", function (req, res, next) {
    res.send('expressjs-mw allowedReferer');
});

let port = 3000
// 启动Server
app.listen(port, function () {
    let env = app.get("env")
    console.info("expressjs-mw server listening  on %d,   mode %s", port, env)
});

