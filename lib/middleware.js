const {DEBUG, SESSION_SECRET, STATIC_DIR} = require('./constants')
const {join} = require('path')
const {static} = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const session = require('express-session')
const lembro = require('express-lembro')(session)


module.exports = (app) => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(static(STATIC_DIR))

    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        store: new lembro(),
    }))
}
