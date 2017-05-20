import React from 'react'
import MenuBar from './../../molecules/MenuBar'
import UserMenu from './../../molecules/UserMenu'

import './Topbar.css'

const Topbar = () =>
  <header className="topbar">
    <section className="topbar__menu">
      <MenuBar />
    </section>

    <section className="topbar__user-menu">
      <UserMenu />
    </section>
  </header>

export default Topbar