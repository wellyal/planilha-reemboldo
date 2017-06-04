import React, { Component } from 'react'
import MenuIcon from 'react-icons/lib/fa/align-justify'

import './HiddenMenuBar.css'

class HiddenMenuBar extends Component {
  render() {
    return (
      <div className="hidden-menu-bar">
        <MenuIcon
          color="#fff"
          fontSize={30}
        />
      </div>
    )
  }
}

export default HiddenMenuBar