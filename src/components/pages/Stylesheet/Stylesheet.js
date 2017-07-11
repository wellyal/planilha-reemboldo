import React, { Component } from 'react'
// import EditIcon from 'react-icons/lib/ti/edit'
// import DeleteIcon from 'react-icons/lib/ti/trash'
import Input from 'components/atoms/Input'
import Topbar from 'components/organisms/Topbar'
import InputFile from 'components/atoms/InputFile'
import StylesheetContent from 'components/organisms/StylesheetContent'
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Stylesheet.css'

class Stylesheet extends Component {
  render() {
    console.log(this.props.stylesheet)
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
                      ref={ input => this.date = input }
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
                      ref={ input => this.type = input }
                      required="true"
                      fieldName="Type"
                      type="text"
                    />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="form-group__item">
                    <Input
                      ref={ input => this.value = input }
                      required="true"
                      fieldName="Value"
                      type="text"
                    />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="form-group__item">
                    <Input
                      ref={ input => this.obs = input }
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
            <button className="default" onClick={this.handleClick}>
              Adicionar Despesa
            </button>
          </section>

          {
            this.props.stylesheet &&
              <StylesheetContent data={this.props.stylesheet}/>
          }
        </section>
      </div>
    )
  }

  handleClick = () => {
    const payload = {
      date: this.date.state.inputValue,
      type: this.type.state.inputValue,
      value: this.value.state.inputValue,
      obs: this.obs.state.inputValue
    }

    this.props.saveStylesheet(payload)
  }

}

export default Stylesheet