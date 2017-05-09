import React from 'react'
import MenuArrowDown from 'react-icons/lib/fa/caret-down'
import profileImage from './../../temp/profile.jpg'

import './UserMenu.css'

const UserMenu = () =>
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
  </section>

export default UserMenu