import React from 'react'
import { NavLink } from 'react-router-dom'
import HiddenMenuBar from './HiddenMenuBar'

import './MenuBar.css'

const Menubar = () => {
  return (
    <nav className="navigation__list">
      <HiddenMenuBar />

      <NavLink activeClassName="active" className="navigation-item" to="/app/stylesheet">
        <span>Criar Planilha</span>
      </NavLink>

      <NavLink activeClassName="active" className="navigation-item" to="/app/history">
        <span>Histórico</span>
      </NavLink>

      <NavLink activeClassName="active" className="navigation-item" to="/app/about">
        <span>Sobre</span>
      </NavLink>
    </nav>
  )
}

export default Menubar