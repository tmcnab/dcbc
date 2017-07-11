const {createHash} = require('crypto')
const {DEBUG} = require('../lib/constants')
const {Router} = require('express')
const Portier = require('portier')


const router = module.exports = new Router()
const portier = new Portier({
    redirectUri: DEBUG
        ? 'http://localhost:3000/auth/verify'
        : 'https://domain.tld/auth/verify'
})


router.post('/challenge', (req, res, next) =>
    portier.authenticate(req.body.email, (error, url) =>
        error ? next(error) : res.redirect(303, url)
    ))

router.post('/verify', (req, res, next) =>
    portier.verify(req.body.id_token, (error, email) => {
        if (error) {
            next(error)
        } else {
            req.session.user = createHash('sha512').update(email).digest('base64')
            res.redirect('/')
        }
    }))


router.get('/exit', (req, res) => {
    req.session.user = null
    res.redirect('/')
})
