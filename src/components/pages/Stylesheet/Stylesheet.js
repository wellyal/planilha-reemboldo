import React from 'react'
import EditIcon from 'react-icons/lib/ti/edit'
import DeleteIcon from 'react-icons/lib/ti/trash'
import Input from 'components/atoms/Input'
import Topbar from 'components/organisms/Topbar'
import InputFile from 'components/atoms/InputFile'
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Stylesheet.css'

const Stylesheet = () => {
  return (
    <div className="stylesheet-container">
      <Topbar />

      <section className="content-container">
        <div>
          <InputFile />
        </div>
        <Grid fluid>
          <section className="form-group">
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="form-group__item">
                  <Input
                    value=""
                    required="true"
                    fieldName="Date"
                    type="date"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="form-group__item">
                  <Input
                    required="true"
                    fieldName="Type"
                    type="text"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="form-group__item">
                  <Input
                    required="true"
                    fieldName="Value"
                    type="text"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="form-group__item">
                  <Input
                    required="true"
                    fieldName="Comment"
                    type="text"
                  />
                </div>
              </Col>
            </Row>
          </section>
        </Grid>

        <section className="form-group__add-button">
          <button className="default">Adiciona Despesa</button>
        </section>

        <section className="form-group-table">
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
      </section>
    </div>
  )
}

export default Stylesheet