'use strict';

let express = require('express');
let app = express();
let mv = require("../index")

// 不限制跨域来源
// app.use(mv.crossOrigin.allowedOrigin([/\.*/]))

// 限制跨域来源，使用正则
app.use(mv.crossOrigin.allowedOrigin([/\.*.github.com/, "www.g.cn", /http:\/\/localhost*/,]))

app.use(mv.bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use(mv.bodyParser.json({limit: '5mb'}));
app.use(mv.compression());
app.use(mv.cookieParser());

app.all("/", function (req, res, next) {
    res.send('expressjs-mw allowedOrigin');
});

let port = 3000
//启动Server
app.listen(port, function () {
    let env = app.get("env")
    console.info("expressjs-mw server listening  on %d,   mode %s", port, env)
});

