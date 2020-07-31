'use strict';
let textMsg = `<xml><ToUserName><![CDATA[gh_4ac089bd7a8f]]></ToUserName> <FromUserName><![CDATA[o5ZCDtzDKDk-lYJDm1cJ2FHqeiEk]]></FromUserName><CreateTime>1596137809</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[就能解决]]></Content><MsgId>22851197627343845</MsgId></xml>`;

let sign = {
    "signature": "e92044f0922b0d5ebad0eec84ef647eb3e42427c",
    "timestamp": "1596132638",
    "nonce": "2118483993",
    "openid":"o5ZCDtzDKDk-lYJDm1cJ2FHqeiEk"
}


const supertest = require('supertest');
let server = supertest('http://localhost:8008');

describe("WX", function () {
    it("post text ", async () => {
        server.post("/")
            .query(sign)
            .send(textMsg)
            .set("content-type",'text/xml')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.text)
            });
    })
})
