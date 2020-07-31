// 将微信端发送的XML消息解析为JSON对象
function parseMessage(message) {
    let result = {};
    message.replace(/<xml>|<\/xml>/, '')
        .replace(/<!\[CDATA\[(.*?)\]\]>/ig, '$1')
        .replace(/<(\w+)>(.*?)<\/\1>/g, (_, key, value) => {
            key = key.replace(/(\w)/, (str) => {
                return str.toLowerCase();
            });
            result[key] = value;
        });
    return result;
}

/**
 * 消息、事件解析
 */
module.exports = function (req, res, next) {
    if (req.method !== 'POST' || req.headers['content-type'] !== 'text/xml') {
        // 非POST请求且请求头非xml的当作非法请求不予处理
        return res.end('Bad Request!');
    }

    // 解析请求体中的内容
    req.message = parseMessage(req.body);

    next();
};

// text: (req, res, next) => {
//     console.log("wx.text")
// },
//     image: (req, res, next) => {
//
// },
//     voice: (req, res, next) => {
//
// },
//     video: (req, res, next) => {
//
// },
//     location: (req, res, next) => {
//
// },
//     link: () => {
//
// },


// menu: (req, res, next) => {
//     console.log("wx.menu")
// },
//
//     user: () => {
//
// },
//     upload: () => {
//
// },
//     scan: () => {
// },
//     subscribe: () => {
// },
//     unsubscribe: () => {
// },
//     click: () => {
// },
//     state: () => {
// }