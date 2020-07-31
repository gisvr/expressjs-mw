let fs = require('fs');
let ejs = require('ejs');

// 消息模板
let messageTpl = fs.readFileSync(__dirname + './template/message.ejs', 'utf-8');

/**
 * 消息、事件解析
 */
module.exports = function (req, res, next) {
    if (req.method !== 'POST' || req.headers['content-type'] !== 'text/xml') {
        // 非POST请求且请求头非xml的当作非法请求不予处理
        return res.end('Bad Request!');
    }

    // 定义回复消息内容
    let reply = {
        toUserName: req.message.fromUserName,
        fromUserName: req.message.toUserName,
        createTime: new Date().getTime()
    };

    // 回复消息方法
    res.reply = function (data) {
        let newDate = {...reply, ...data}
        let output = ejs.render(messageTpl, newDate);
        res.end(output);
    };

    // 回复文本消息
    res.text = function (data) {
        res.reply({msgType: 'text', content: data});
    };

    // 回复图文消息
    res.news = function (data) {
        res.reply({msgType: 'news', content: data});
    };

    // 调试打印此次请求的内容
    res.debug = function () {
        console.log(req.message);
        res.reply({msgType: 'text', content: JSON.stringify(req.message)});
    };

    next()
}