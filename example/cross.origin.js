'use strict';

let express = require('express');
let app = express();
let mw = require("../index")

// 不限制跨域来源
// app.use(mw.crossOrigin.allowedOrigin([/\.*/]))

let allowList = [/\.*.github.com/, "www.g.cn", /http:\/\/localhost*/]
// 限制跨域来源，使用正则
app.use(mw.crossOrigin.allowedOrigin(allowList))

app.use(mw.bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use(mw.bodyParser.json({limit: '5mb'}));
app.use(mw.compression());
app.use(mw.cookieParser());

app.all("/", function (req, res, next) {
    res.send('expressjs-mw allowedOrigin');
});

let port = 3000
//启动Server
app.listen(port, function () {
    let env = app.get("env")
    console.info("expressjs-mw server listening  on %d,   mode %s", port, env)
});

