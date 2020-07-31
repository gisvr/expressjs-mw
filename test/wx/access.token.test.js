let accessToken = require("../../lib/wx/access.token")

// let config_test = {
//     appID: 'wx45fb5c2b2166b547',
//     appSecret: '5a3dde523c96e8ef42bcbd36e4bf5eff',
// };
describe("WX access token", function () {
    it("get access token", async () => {
        let foo = await accessToken(config_test)
        console.log(foo)
    })
})