import React from 'react'
import EditIcon from 'react-icons/lib/ti/edit'
import DeleteIcon from 'react-icons/lib/ti/trash'
import Input from 'components/atoms/Input'
import Topbar from 'components/organisms/Topbar'
import InputFile from 'components/atoms/InputFile'
import './Stylesheet.css'

const Stylesheet = () => {
  return (
    <div>
      <Topbar />
      <div>
        <InputFile />
      </div>
      <section className="form-group">
        <div className="form-group__item">
          <Input
            required="true"
            fieldName="Date"
            type="date"
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

      <section className="form-group-table">
        <ul className="form-group-col actions">
          <li className="form-group-table__row header">Ações</li>
          <li className="form-group-table__row">
            <EditIcon color="green" fontSize={20} />
            <DeleteIcon color="red" fontSize={20} />
          </li>
          <li className="form-group-table__row">
            <EditIcon color="green" fontSize={20} />
            <DeleteIcon color="red" fontSize={20} />
          </li>
          <li className="form-group-table__row">
            <EditIcon color="green" fontSize={20} />
            <DeleteIcon color="red" fontSize={20} />
          </li>
          <li className="form-group-table__row">
            <EditIcon color="green" fontSize={20} />
            <DeleteIcon color="red" fontSize={20} />
          </li>
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
    </div>
  )
}

export default Stylesheet