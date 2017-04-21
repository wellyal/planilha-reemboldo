import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="form">
        <form action="#">
          <div className="text-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
            <span className="separator"> </span>
          </div>

          <div className="text-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="" />
            <span className="separator" />
          </div>

          <div className="form-bottom">
            <input type="submit" id="submit" value="Login"/>
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
}

export default Login;
