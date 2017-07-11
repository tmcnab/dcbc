const { Page } = require('./.components')
const React = require('react')

module.exports = ({_locals, DEBUG, error}) =>
    <Page _locals={_locals} title='Error'>
        <h2>{error.status} {error.message}</h2>
        <p>Sorry about that.</p>
    </Page>
