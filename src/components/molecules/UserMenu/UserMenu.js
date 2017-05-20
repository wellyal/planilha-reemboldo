import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuArrowDown from 'react-icons/lib/fa/caret-down'
import autobind from 'class-autobind'
import cx from 'classnames'

import profileImage from './../../../temp/profile.jpg'

import './UserMenu.css'

class UserMenu extends Component {
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
      <section className="user-area" onClick={this.toggleDropdown}>
        <div className="user-area__img">
          <img alt="Profile" src={profileImage} />
        </div>
        <div className="user-area__name">
          <span>Wellyngton Amaral</span>
        </div>
        <div className="user-area__arrow">
          <MenuArrowDown
            fontSize={20}
            color="white"
          />
        </div>
        <div className={className}>
          { this.renderDropdown() }
        </div>
      </section>
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
      <ul className="user-menu-list">
        <li className="user-menu-item">
          <Link to="/profile">Editar Perfil</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/logout">Sair</Link>
        </li>
      </ul>
    )
  }
}


export default UserMenu

