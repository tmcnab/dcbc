const {DEBUG, STATIC_DIR} = require('./constants')
const {join} = require('path')
const {static} = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


module.exports = (app) => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(static(STATIC_DIR))
}
