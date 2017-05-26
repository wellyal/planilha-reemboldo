import React, { Component } from 'react'
import autobind from 'class-autobind'
import UploadIcon from 'react-icons/lib/ti/upload'

import './InputFile.css'

class InputFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: 'Nenhum arquivo selecionado até o momento',
    }

    autobind(this)
  }

  render() {
    const { fileName } = this.state

    return (
      <div className="file-area input-file">
        <label htmlFor="inputFile">
          <figure className="input-file__icon">
            <UploadIcon fontSize={60} color="#2c6cc3" />
          </figure>
          {
            fileName &&
              <span className="file-area__file-name">{ fileName }</span>
          }
        </label>
        <input id="inputFile" type="file"/>
      </div>
    )
  }

  handChange() {
    const inputValue = event.target.value.split('\\')
    const fileName = inputValue[inputValue.length - 1]
    this.setState({ fileName })
  }
}

export default InputFile