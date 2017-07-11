const {Router} = require('express')


const router = module.exports = new Router()


router.get('/', (req, res, next) => {
    const {query} = req.query

    if (query) {
        // search db for terms
        res.render('root/search', {query})
    } else {
        // get activity log items and latest/hottest items.
        res.render('root/index', {})
    }
})
