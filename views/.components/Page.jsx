const {string} = require('prop-types')
const {Column, Container, Row} = require('milligrami')
const Navigation = require('./navigation')
const React = require('react')


const Page = ({ children, stylesheet, title, _locals }) =>
    <html>
        <head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie-edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <title>{title} • dckb</title>
            <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
            <link rel='stylesheet' href='//cdn.rawgit.com/necolas/normalize.css/master/normalize.css' />
            <link rel='stylesheet' href='//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css' />
            <link rel='stylesheet' href='/helpers.css' />
            <link rel='stylesheet' href='/page.css' />
            {stylesheet ? <link rel='stylesheet' href={stylesheet} /> : null}
        </head>
        <body>
            <header className='bb'>
                <Container>
                    <Row>
                        <Column>
                            <h1 className='mbs mts'>
                                <a href="/">dckb</a>
                            </h1>
                        </Column>
                        <Column>
                            <Navigation _locals={_locals} />
                        </Column>
                    </Row>
                </Container>
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <footer>
                <hr />
                <Container>
                    <p>
                        <a href='https://github.com/tmcnab/dckb/'>Source code</a> licensed under <a href='https://opensource.org/AGPL-3.0'>AGPL-3.0</a>.
                        There's an <a href='https://tmcnab.github.io/dckb'>API</a> too.
                    </p>
                </Container>
            </footer>
        </body>
    </html>


Page.propTypes = {
    stylesheet: string,
    title: string.isRequired
}


module.exports = Page
