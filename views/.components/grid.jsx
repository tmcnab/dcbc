const React = require('react')

const Grid = ({ children }) =>
    <div className='grid'>
        {children}
    </div>


Grid.Cell = ({ children }) =>
    <div className='cell'>
        {children}
    </div>


module.exports = Grid
