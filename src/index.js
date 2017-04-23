import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import testLogin from './reducers/testLogin'
import Login from './pages/Login/Login';
import './index.css';

let store = createStore(testLogin)

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
