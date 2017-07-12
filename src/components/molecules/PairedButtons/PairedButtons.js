import React from 'react'

import './PairedButtons.css'

const PairedButtons = props => {
  return (
    <div className="pairedbuttons-container">
      <button disabled className="pairedbuttons left-side">{props.children[0]}</button>
      <button className="pairedbuttons right-side">{props.children[1]}</button>
    </div>
  )
}

export default PairedButtons