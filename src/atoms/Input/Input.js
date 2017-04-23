import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ fieldName, type }) => {
  const normalizedLabel = fieldName.toLowerCase()

  return (
    <div className="text-input">
      <label htmlFor={normalizedLabel}>{fieldName}</label>
      <input
        type={type}
        name={normalizedLabel}
      />
      <span className="separator"></span>
    </div>
  )
}

Input.propTypes = {
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

Input.defaultProps = {
  fieldName: 'field',
  type: 'text'
}

export default Input