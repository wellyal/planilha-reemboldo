import React from 'react'

import './ListItem.css'

const ListItem = ({ date, type, value, index }) =>
  <div>
    <input id={`uid${index}`} className="listitem" name={`uid${index}`} type="checkbox" />

    <label htmlFor={`uid${index}`} className="listitem-label">{date}</label>
    <label htmlFor={`uid${index}`} className="listitem-label">{type}</label>
    <label htmlFor={`uid${index}`} className="listitem-label">{value}</label>
  </div>

export default ListItem