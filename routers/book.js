const {Router} = require('express')


const router = module.exports = new Router()


router.get('/', (req, res, next) => {
    // get popular and newest books
    res.render('book/index', {
        newest: [],
        popular: [],
    })
})


router.get('/create', (req, res) =>
    res.render('book/edit', {}))
