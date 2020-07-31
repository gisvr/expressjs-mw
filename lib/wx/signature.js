let crypto = require('crypto');

//验证微信端发送的消息
module.exports = function (config) {
    return function (req, res, next) {
        //每个wx请求都有signature
        if (!req.query.signature) {
            return res.end('Access Denied!');
        }

        // 验证签名
        let msg = [config.appToken, req.query.timestamp, req.query.nonce].sort().join('');
        let signature = crypto.createHash('sha1').update(msg).digest('hex');
        if (req.query.signature != signature) {
            return res.end('signature failed!'); // 指纹码不匹配时返回错误信息，禁止后面的消息接受及发送
        }
        // 区分类型
        if (req.query.echostr) {
            return res.end(req.query.echostr); // 添加公众号接口地址时，返回查询字符串echostr表示验证通过
        } else {
            req.user = req.query // 接收消息将用户信息保存下来
        }
        // 消息真实性验证通过，继续后面的处理
        return next();
    };
};

