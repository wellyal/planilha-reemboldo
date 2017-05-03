import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './../../atoms/Input'
import Button from './../../atoms/Button'
import { login } from '../../actions';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this)
  }

  render() {
    console.log(this.props.userLogin.isLogged)
    return (
      <div className="form">
        <form action="#">
          <Input
            fieldName="Username"
            type="text"
          />

          <Input
            fieldName="Password"
            type="password"
          />

          <div className="form-bottom">
            <Button
              buttonName="Login"
              onClick={this.login}
            />
          </div>


          <div className="form-bottom footer-links">
            <a>forgot password</a>
          </div>

          <div className="form-bottom footer-links">
            <a>create account</a>
          </div>
        </form>
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
