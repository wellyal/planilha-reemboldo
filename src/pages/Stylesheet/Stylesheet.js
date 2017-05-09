import React from 'react'
import Input from './../../atoms/Input'
import Topbar from './../../organisms/Topbar'

import './Stylesheet.css'

const Stylesheet = () => {
  return (
    <div>
      <Topbar />
      <section className="form-group">
        <div className="form-group__item">
          <Input
            required="true"
            fieldName="Date"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            required="true"
            fieldName="Type"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            required="true"
            fieldName="Value"
            type="text"
          />
        </div>
        <div className="form-group__item">
          <Input
            required="true"
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