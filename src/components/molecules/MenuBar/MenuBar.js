import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuBar.css'

const Menubar = () => {
  return (
    <nav className="navigation__list">
      <NavLink activeClassName="active" className="navigation-item" to="/app/stylesheet">
        <span>Criar Planilha</span>
      </NavLink>

      <NavLink activeClassName="active" className="navigation-item" to="/app/history">
        <span>Histórico</span>
      </NavLink>

      <NavLink activeClassName="active" className="navigation-item" to="/app/profile">
        <span>Perfil</span>
      </NavLink>
    </nav>
  )
}

export default Menubar