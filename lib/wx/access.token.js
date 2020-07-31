let axios = require('axios');

/**
 * 验证接受来自微信端发送的消息真实性
 */
let url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential"
module.exports = async (conf) => {
    let {appID, appSecret, appToken} = conf
    let getUrl = url + `&appid=${appID}&secret=${appSecret}`
    let res = await axios(getUrl)
    return res.data
}
