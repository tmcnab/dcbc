const auth = require('./auth')
const root = require('./root')



// catch 404 and forward to error handler
function notFound (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
}

// error handler
function errorHandler (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
}



module.exports = (app) =>
    app.use('/', root)
       .use('/auth', auth)
       .use(notFound)
       .use(errorHandler)
