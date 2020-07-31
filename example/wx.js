'use strict';

let express = require('express');
let app = express();
let mw = require("../index")

// 微信测试sandbox：扫码登录后获取
// https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
let config = {
    appID: '***********',
    appSecret: 'secret',
    appToken: 'txdev'
};
mw.wx.config(app, config)
app.use(mw.wx.signature)
app.use(mw.wx.message)
app.use(mw.wx.reply)

app.post("/", function (req, res, next) {
    let msgType = req.message.msgType
    console.log(msgType)
    console.log(req.message)
    res.text("Hello")
});

// 内网映射：https://ngrok.com/ // 谷歌登录
let port = 8008
//启动Server
app.listen(port, function () {
    let env = app.get("env")
    console.info("wx server listening  on %d,   mode %s", port, env)
});
