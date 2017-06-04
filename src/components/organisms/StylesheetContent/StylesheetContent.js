import React, { Component } from 'react'

import './StylesheetContent.css'

class StylesheetContent extends Component {
  render() {
    return (
      <section className="form-group-table">
        <ul className="form-group-col select-col">
          <li className="form-group-table__row header"><input type="checkbox" /></li>
          <li className="form-group-table__row"><input type="checkbox" /></li>
          <li className="form-group-table__row"><input type="checkbox" /></li>
          <li className="form-group-table__row"><input type="checkbox" /></li>
          <li className="form-group-table__row"><input type="checkbox" /></li>
        </ul>

        <ul className="form-group-col">
          <li className="form-group-table__row header">Data</li>
          <li className="form-group-table__row">12/05/2017</li>
          <li className="form-group-table__row">13/05/2017</li>
          <li className="form-group-table__row">14/05/2017</li>
          <li className="form-group-table__row">15/05/2017</li>
        </ul>

        <ul className="form-group-col">
          <li className="form-group-table__row header">Tipo</li>
          <li className="form-group-table__row">Alimentação</li>
          <li className="form-group-table__row">Viagem</li>
          <li className="form-group-table__row">Academia</li>
          <li className="form-group-table__row">Educação</li>
        </ul>

        <ul className="form-group-col">
          <li className="form-group-table__row header">Valor</li>
          <li className="form-group-table__row">25,00</li>
          <li className="form-group-table__row">15,00</li>
          <li className="form-group-table__row">40,00</li>
          <li className="form-group-table__row">150,00</li>
        </ul>
      </section>
    )
  }
}

export default StylesheetContent