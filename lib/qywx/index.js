let config = {
    appID: 'wxd59a79ed8e3fab89',
    appSecret: '',
    appToken: 'WXConnect'
};

/*
    接口参考：https://github.com/node-webot/co-wechat-enterprise-api
    https://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5
    内网映射：https://github.com/TwoOld/koa2-wechat
 */
module.exports = {
    config: (conf) => {
        return (req, res, next) => {
            let reqOrigin = req.headers.origin
            let validUrl = regEXP.test(reqOrigin);
            if (validUrl) {
                next()
            } else {
                throw "Origin Url not valid"
            }
        }
    },
    menu: (req, res, next) => {
    },
    text: (req, res, next) => {

    },
    image: (req, res, next) => {

    },
    voice: (req, res, next) => {

    },
    video: (req, res, next) => {

    },
    location: (req, res, next) => {

    },
    link: () => {

    },
    user: () => {
    },
    upload: () => {
    },
    scan: () => {
    },
    subscribe: () => {
    },
    unsubscribe: () => {
    },
    click: () => {
    },
    state: () => {
    }
}