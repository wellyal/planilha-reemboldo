import React from 'react'
import UserMenu from './../../molecules/UserMenu'
import MenuIcon from 'react-icons/lib/fa/align-justify'

import './Topbar.css'

const Topbar = () =>
  <header className="topbar">
    <section className="topbar__menu">
      <MenuIcon
        color="white"
        fontSize={30}
      />
    </section>

    <section className="topbar__title">
      <span>Planilha de Reembolso</span>
    </section>

    <UserMenu />
  </header>

export default Topbar