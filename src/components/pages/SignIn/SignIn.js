import React, { Component } from 'react'
import LockIcon from 'react-icons/lib/ti/lock-closed'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handLoginClick = this.handLoginClick.bind(this)
  }

  render() {
    return (
      <div className="signin-container">
        <div className="signin__header">
          <figure className="header__signin-icon">
            <LockIcon
              size={50}
              color="white"
            />
          </figure>
        </div>

        <div className="signin-container__disclaimer">
          <span>Login</span>
        </div>

        <div className="form">
          <form action="#">
            <Input
              ref={input => this._username = input}
              required="true"
              fieldName="Usuário"
              type="text"
            />

            <Input
              required="true"
              ref={input => this._password = input}
              fieldName="Senha"
              type="password"
            />

            <div className="form-bottom">
              <Button
                buttonName="Entrar"
                onClick={this.handLoginClick}
              />

              <div className="footer-links">
                <div className="footer-links__item">
                  <a>esqueceu a senha</a>
                </div>
                <div className="footer-links__item">
                  <a>crie uma conta</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handLoginClick(event) {
    event.preventDefault()

    const payload = {
      username: this._username.state.inputValue,
      password: this._password.state.inputValue
    }

    this.props.authenticate(payload)
  }
}

export default SignIn