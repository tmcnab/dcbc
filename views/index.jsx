const { Grid, Page } = require('./.components')
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
        <Grid>
            <Grid.Cell>
                <h2>recently added</h2>
                <section>Recently added books here.</section>
            </Grid.Cell>
            <Grid.Cell>
                <Grid>
                    <Grid.Cell>
                        <div className="pl pr">
                            <h2>about</h2>
                            <p><strong>dckb</strong> is a place to discuss political books and shit</p>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell>
                        <div className="right">
                            <h2>activity</h2>
                            <ActivityCard />
                            <ActivityCard />
                            <ActivityCard />
                            <ActivityCard />
                        </div>
                    </Grid.Cell>
                </Grid>
            </Grid.Cell>
        </Grid>
    </Page>
