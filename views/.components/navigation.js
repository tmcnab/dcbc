const {LinkButton} = require('milligrami')
const React = require('react')


module.exports = ({_locals}) =>
    <nav className="ar mtm">
        <LinkButton href='/books' clear>Books</LinkButton>
        {
            _locals.user
                ? <LinkButton clear href={`/user/${_locals.user.id}`}>me</LinkButton>
                : <LinkButton clear href={`/auth/browser/sign-in`}>sign-in</LinkButton>
        }
    </nav>
