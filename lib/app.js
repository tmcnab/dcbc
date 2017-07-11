const { VIEWS_DIR } = require('./constants')
const express = require('express')
const app = express()


// view engine setup (https://github.com/reactjs/express-react-views)
app.set('views', VIEWS_DIR)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


require('./middleware')(app)
require('../routers')(app)


module.exports = app
