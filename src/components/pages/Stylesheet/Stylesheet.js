import React from 'react'
// import EditIcon from 'react-icons/lib/ti/edit'
// import DeleteIcon from 'react-icons/lib/ti/trash'
import Input from 'components/atoms/Input'
import Topbar from 'components/organisms/Topbar'
import InputFile from 'components/atoms/InputFile'
import StylesheetContent from 'components/organisms/StylesheetContent'
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
          <button className="default">Adicionar Despesa</button>
        </section>

        <StylesheetContent />
      </section>
    </div>
  )
}

export default Stylesheet