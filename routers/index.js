const {DEBUG} = require('../lib/constants')
const auth = require('./auth')
const createError = require('http-errors')
const root = require('./root')


// catch 404 and forward to error handler
const notFound = (req, res, next) =>
    next(createError(404))

// error handler
const errorHandler = (error, req, res, next) =>                                 // eslint-disable-line
    res.status(error.status).render('error', { DEBUG, error })


module.exports = (app) =>
    app.use('/', root)
        .use('/auth', auth)
        .use(notFound)
        .use(errorHandler)
