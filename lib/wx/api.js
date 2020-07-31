const WechatAPI = require('co-wechat-api');

module.exports = (conf) => {
    let {appID, appSecret, appToken} = conf
    return new WechatAPI(appID, appSecret);
}