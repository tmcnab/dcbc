const { string } = require('prop-types')
const Grid = require('./grid')
const Navigation = require('./navigation')
const React = require('react')



const Page = ({ children, stylesheet, title, _locals }) =>
    <html>
        <head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie-edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <title>{title} • dckb</title>
            <link rel='stylesheet' href='/page.css' />
            {stylesheet ? <link rel='stylesheet' href={stylesheet} /> : null}
        </head>
        <body>
            <header>
                <Grid>
                    <Grid.Cell>
                        <h1>dckb</h1>
                    </Grid.Cell>
                    <Grid.Cell>
                        <Navigation _locals={_locals} />
                    </Grid.Cell>
                </Grid>

            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>
                    <a href="https://github.com/tmcnab/dckb/">Source code</a> licensed under <a href='https://opensource.org/AGPL-3.0'>AGPL-3.0</a>.
                </p>
            </footer>
        </body>
    </html>


Page.propTypes = {
    title: string.isRequired
}


module.exports = Page
