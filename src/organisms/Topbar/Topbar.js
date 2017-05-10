import React from 'react'
import UserMenu from './../../molecules/UserMenu'
import MainMenu from './../../molecules/MainMenu'

import './Topbar.css'

const Topbar = () =>
  <header className="topbar">
    <section className="topbar__menu">
      <MainMenu />
    </section>

    <section className="topbar__title">
      <span>Planilha de Reembolso</span>
    </section>

    <UserMenu />
  </header>

export default Topbar