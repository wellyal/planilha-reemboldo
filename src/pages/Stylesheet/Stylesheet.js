import React from 'react'
import Input from './../../atoms/Input'
import profileImage from './../../temp/profile.jpg'
import MenuIcon from 'react-icons/lib/fa/align-justify'
import MenuArrowDown from 'react-icons/lib/fa/caret-down'

import './Stylesheet.css'

const Stylesheet = () => {
  return (
    <div>
      <header className="topbar">
        <section className="topbar__menu">
          <MenuIcon
            color="white"
            fontSize={30}
          />
        </section>
        <div className="user-area__title">
          <span>Planilha de Reembolso</span>
        </div>
        <section className="topbar__user-area">
          <div className="user-area__img">
            <img alt="Profile image" src={profileImage} />
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
      </header>

      <section className="form-group">
        <div className="form-group__item">
          <Input
            fieldName="Date"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            fieldName="Type"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            fieldName="Value"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            fieldName="Comment"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <button className="favicon">
            +
          </button>
        </div>
      </section>
    </div>
  )
}

export default Stylesheet