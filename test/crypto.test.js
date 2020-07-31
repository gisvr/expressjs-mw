
let url = require('url');
let crypto = require('crypto');

let config = {
    appID: 'wxa0251a8a1e9ebf95',
    appSecret: '030a713cf2a533f3cf13712e29f01d51',
    appToken: 'txdev'
};
let req ={
    "signature": "e92044f0922b0d5ebad0eec84ef647eb3e42427c",
    "echostr": "7940213935597882879",
    "timestamp": "1596132638",
    "nonce": "2118483993"
}

let tmp = [config.appToken, req.timestamp, req.nonce].sort().join('');
let signature = crypto.createHash('sha1').update(tmp).digest('hex');
// let signature = crypto.createHash('sha1').update(tmp).digest('hex');
console.log(signature)