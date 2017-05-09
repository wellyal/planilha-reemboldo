import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from './../../atoms/Input'
import Button from './../../atoms/Button'
import { login } from '../../actions'

import LockIcon from 'react-icons/lib/ti/lock-closed'
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this)
  }

  render() {
    return (
      <div className="login-container">
        <div className="login__header">
          <figure className="header__login-icon">
            <LockIcon
              size={50}
              color="white"
            />
          </figure>
        </div>

        <div className="form">
          <form action="#">
            <Input
              required="true"
              fieldName="Username"
              type="text"
            />

            <Input
              required="true"
              fieldName="Password"
              type="password"
            />

            <div className="form-bottom">
              <Button
                buttonName="Login"
                onClick={this.login}
              />

              <div className="footer-links">
                <div className="footer-links__item">
                  <a>forgot password</a>
                </div>
                <div className="footer-links__item">
                  <a>create account</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  login() {
    this.props.login(this.props.userLogin.isLogged)
  }
}

function mapStateToProps({ userLogin }) {
  return { userLogin };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
