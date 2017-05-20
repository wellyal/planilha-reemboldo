import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import cx from 'classnames'
import './Input.css'

class Input extends Component {
  static propTypes = {
    fieldName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  }

  static defaultProps = {
    fieldName: 'field',
    type: 'text',
    required: true
  }

  constructor(props) {
    super(props);
    this.state = {
      inputFocused: false,
      inputValue: ''
    }

    autobind(this)
  }

  render() {
    const { inputFocused, inputValue } = this.state
    const { fieldName, type, required } = this.props
    const normalizedLabel = fieldName.toLowerCase()

    const className = cx(
      'text-input',
      {'input-active': inputFocused || inputValue},
    )

    return (
      <div className={className}>
        <label className="input-label" htmlFor={normalizedLabel}>
          { fieldName }
        </label>
        <input
          onChange={this.handleChange}
          onFocus={() => this.setState({ inputFocused: true })}
          onBlur={() => this.setState({ inputFocused: false })}
          id={normalizedLabel}
          required={required}
          type={type}
          name={normalizedLabel}
        />
        <span className="separator"></span>
      </div>
    )
  }

  handleChange(event) {
    if (!event) return null
    const inputValue = event.target.value
    this.setState({ inputValue })
  }
}

export default Input