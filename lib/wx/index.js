const bodyParser = require('body-parser');
let signature = require("./signature")
let message = require("./message")
let reply = require("./message/reply")
let accessToken = require("./access.token")
let api = require("./api")

/*
   设计参考：https://github.com/baoshan/wx
 */
let config = {}
module.exports = {
    config: (app, conf) => {
        app.use(bodyParser.text({type: 'text/xml'})); // 获取请求体内容
        let {appID, appSecret, appToken} = conf
        config.appID = appID
        config.appSecret = appSecret
        config.appToken = appToken
    },
    signature: signature(config),
    accessToken: accessToken(config),
    message,
    reply,
    api: api(config),
}