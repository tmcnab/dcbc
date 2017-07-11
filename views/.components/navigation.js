const {LinkButton} = require('milligrami')
const React = require('react')


const AuthForm = ({_locals}) =>
    _locals.user ? null : (
        <form action='/auth/challenge' method='post'>
            <input name='email' placeholder='user@domain.tld' required type='email' />
        </form>
    )


const SearchForm = ({_locals}) =>
    _locals.user ? (
        <form action='/' method='get'>
            <input placeholder='search for things' required type='search' value={_locals.query} />
        </form>
    ) : null



module.exports = ({_locals}) =>
    <nav className="ar mtm">
        <LinkButton href='/books' clear>Books</LinkButton>
        <AuthForm _locals={_locals} />
        <SearchForm _locals={_locals} />
    </nav>
