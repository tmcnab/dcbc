const {join} = require('path')
const ROOT_DIR = join(__dirname, '..')


module.exports = {
    DEBUG: process.env.NODE_ENV === 'production',
    SESSION_SECRET: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16),
    STATIC_DIR: join(ROOT_DIR, 'static'),
    VIEWS_DIR: join(ROOT_DIR, 'views'),
}
