const {Page} = require('../.components')
const React = require('react')


module.exports = ({_locals, query}) =>
    <Page _locals={_locals} query={query} title="Welcome">
        <h2>Search results for <em>{query}</em></h2>
    </Page>
