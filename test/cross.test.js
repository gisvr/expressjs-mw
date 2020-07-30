'use strict';
const supertest = require('supertest');
let server = supertest('http://localhost:3000');

describe("Cross", function () {
    it("get ", async () => {
        server.get("/v1/cross/get")
            .send({})
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.text)
            });
    })

    it("post ", function () {
        server.post("/v1/cross/")
            .send({})
            .set('Origin', 'http://tapi.github.com')
            .set("Referer", 'http://tapi.github.com1')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.text)
            });
    })


})