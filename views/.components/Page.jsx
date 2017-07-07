const React = require('react')


module.exports = ({ children, title }) =>
    <html>
        <head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie-edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <title>{title}</title>
            <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
            {children}
        </body>
    </html>
