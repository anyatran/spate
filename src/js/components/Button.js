import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, ...props }) => (
  <button className="button" {...props}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string
}

export default Button
