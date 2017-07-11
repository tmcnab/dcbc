const {Page} = require('../.components')
const {Column, Row} = require('milligrami')
const React = require('react')


const ActivityCard = ({ }) =>
    <div>
        <span className="pr">➕</span>
        <span>
            <a className="fwb" href="/user/someone">@someone</a> commented on a <a href="/">book</a>.
        </span>
    </div>


module.exports = ({_locals}) =>
    <Page title="Welcome" _locals={_locals}>
        <Row>
            <Column>
                <div className="pl pr">
                    <h2>about</h2>
                    <p><strong>dckb</strong> is a place to discuss political books and shit</p>
                </div>
            </Column>
            <Column>
                <div className="right">
                    <h2>activity</h2>
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                </div>
            </Column>
        </Row>
    </Page>
