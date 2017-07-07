const {join} = require('path')
const ROOT_DIR = join(__dirname, '..')


module.exports = {
    DEBUG: process.env.NODE_ENV === 'production',
    STATIC_DIR: join(ROOT_DIR, 'static'),
    STYLES_DIR: join(ROOT_DIR, 'styles'),
    VIEWS_DIR: join(ROOT_DIR, 'views'),
}
