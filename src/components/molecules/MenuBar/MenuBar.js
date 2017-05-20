import React from 'react'
import { Link } from 'react-router-dom'

import './MenuBar.css'

const Menubar = () => {
  return (
    <ul className="navigation__list">
      <li className="navigation-item">
        <Link to="/stylesheet">Criar Planilha</Link>
      </li>
      <li className="navigation-item">
        <Link to="/history">Histórico</Link>
      </li>
      <li className="navigation-item">
        <Link to="/about">Sobre</Link>
      </li>
    </ul>
  )
}

export default Menubar