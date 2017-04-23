import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ buttonName }) => {
  return (
    <button>{buttonName}</button>
  )
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
}

Button.defaultProps = {
  buttonName: 'OK'
}

export default Button