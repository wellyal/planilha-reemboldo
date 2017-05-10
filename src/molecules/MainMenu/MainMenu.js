import React, { Component } from 'react'
import MenuIcon from 'react-icons/lib/fa/align-justify'
import { Link } from 'react-router-dom'
import autobind from 'class-autobind'
import cx from 'classnames'

import './MainMenu.css'

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false
    }
    autobind(this)
  }

  render() {
    const { isMenuActive } = this.state
    const className = cx('dropdown', {'dropdown-active': isMenuActive})

    return (
      <div
        className="main-menu"
        onMouseEnter={this.toggleDropdown}
        onMouseLeave={this.toggleDropdown}
      >
        <div>
          <MenuIcon color="white" fontSize={30} />
        </div>

        <div className={className}>
          { this.renderDropdown() }
        </div>
      </div>
    )
  }

  toggleDropdown(event) {
    event.stopPropagation()
    this.setState({
      isMenuActive: !this.state.isMenuActive
    })
  }

  renderDropdown() {
    return (
      <ul className="navigation__list">
        <li className="navigation-item">
          <Link to="/stylesheet">Criar Planilha</Link>
        </li>
        <li className="navigation-item">
          <Link to="/history">Histórico</Link>
        </li>
        <li className="navigation-item">
          <Link to="/profile">Perfil</Link>
        </li>
        <li className="navigation-item">
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    )
  }
}

export default MainMenu