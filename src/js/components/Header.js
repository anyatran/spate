import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ name }) => (
  <div className="header">
    <a href="/" className="header__logo">spate</a>
    <div className="header__profile">
      <a href="#" className="header__navigation">music</a>
      <a href="#" className="header__navigation">Hi {name}</a>
    </div>
  </div>
)

Header.propTypes = {
  name: PropTypes.string
}

export default Header;
