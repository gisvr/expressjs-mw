'use strict';
const supertest = require('supertest');
let server = supertest('http://localhost:8008');


describe("WX", function () {
    it("check signature ", async () => {
        server.get("/")
            .query({
                "signature": "e92044f0922b0d5ebad0eec84ef647eb3e42427c",
                "echostr": "7940213935597882879",
                "timestamp": "1596132638",
                "nonce": "2118483993"
            })
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.text)
            });
    })
})
