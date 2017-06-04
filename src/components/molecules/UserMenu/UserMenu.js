import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuArrowDown from 'react-icons/lib/fa/caret-down'
import autobind from 'class-autobind'
import cx from 'classnames'

import profileImage from 'temp/profile.jpg'

import './UserMenu.css'

class UserMenu extends Component {
  render() {
    return (
      <section className="user-area">
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
        <div className="dropdown">
          <ul className="user-menu-list">
            <li className="user-menu-item">
              <Link to="/profile">Editar Perfil</Link>
            </li>
            <li className="user-menu-item">
              <Link to="/logout">Sair</Link>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default UserMenu

