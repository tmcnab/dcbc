const { string } = require('prop-types')
const React = require('react')


const Item = ({href, text}) =>
    <span className="margin padding">
        <a href={href}>{text}</a>
    </span>

Item.propTypes = {
    href: string.isRequired,
    text: string.isRequired,
}


const Navigation = ({_locals}) =>
    <nav className="right">
        <Item href="/" text="home" />
        <Item href="/book" text="books" />
        {
            _locals.user
                ? <Item href={`/user/${_locals.user.id}`} text="me" />
                : <Item href="/auth/sign-in" text="sign in" />
        }
    </nav>


module.exports = Navigation
