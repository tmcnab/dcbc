const React = require('react')


module.exports = ({ children, title }) =>
    <html>
        <head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
            {children}
        </body>
    </html>
