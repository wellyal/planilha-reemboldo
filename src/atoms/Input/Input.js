import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ fieldName, type, required }) => {
  const normalizedLabel = fieldName.toLowerCase()

  return (
    <div className="text-input">
      <label htmlFor={normalizedLabel}>{fieldName}</label>
      <input
        required={required}
        type={type}
        name={normalizedLabel}
      />
      <span className="separator"></span>
    </div>
  )
}

Input.propTypes = {
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

Input.defaultProps = {
  fieldName: 'field',
  type: 'text',
  required: true
}

export default Input