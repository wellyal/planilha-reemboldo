import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Stylesheet from './pages/Stylesheet'

const Routes = ({ store }) => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/stylesheet" component={Stylesheet} />
    </div>
  </Router>
)

export default Routes
