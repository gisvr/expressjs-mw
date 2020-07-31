const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const crossOrigin = require("./lib/cross.origin")
const wx = require("./lib/wx")

module.exports = {
    bodyParser,
    cookieParser,
    compression,
    crossOrigin,
    wx,
}