import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = props => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export default Button