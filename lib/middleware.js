const { DEBUG, STATIC_DIR, STYLES_DIR } = require('./constants')
const { join } = require('path')
const { static } = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const sassMiddleware = require('node-sass-middleware')

module.exports = (app) => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(sassMiddleware({
        debug: DEBUG,
        dest: STATIC_DIR,
        response: false,
        sourceMap: true,
        src: STYLES_DIR,
    }))
    app.use(static(STATIC_DIR))
}
