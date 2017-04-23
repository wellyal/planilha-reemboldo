import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './../../atoms/Input'
import Button from './../../atoms/Button'
import { login } from '../../actions/loginAction';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.sighIn = this.sighIn.bind(this)
  }

  render() {
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

  sighIn() {
    this.props.login(this.props.testLogin)
  }
}

function mapStateToProps({ testLogin }) {
  return { testLogin };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
