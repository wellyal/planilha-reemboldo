import React, { Component } from 'react'
import ListItem from 'components/molecules/ListItem'

import './StylesheetContent.css'

class StylesheetContent extends Component {
  render() {
    return (
      <section className="form-group-table">
        <div>
          {
            this.props.data.map(
              item =>
                <ListItem
                  key={item.index}
                  index={item.index}
                  date={item.date}
                  type={item.type}
                  value={item.value}
                />
            )
          }
        </div>
      </section>
    )
  }
}

export default StylesheetContent