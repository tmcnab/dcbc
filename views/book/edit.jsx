const {Page} = require('../.components')
const React = require('react')


module.exports = class EditBook extends React.Component {

    render () {
        return (
            <Page _locals={this.props._locals}>
                <p>Edit Page</p>
            </Page>
        )
    }

}
