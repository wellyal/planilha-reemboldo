import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Login from './pages/Login/Login';
import './index.css';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
