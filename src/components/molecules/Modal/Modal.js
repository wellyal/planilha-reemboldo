import React from 'react'
import './Modal.css'

const Modal = props => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        {props.children}
      </div>

    </div>
  )
}

export default Modal