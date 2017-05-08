import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './pages/Login'
import Stylesheet from './pages/Stylesheet'

const Routes = ({ store }) => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/stylesheet" component={Stylesheet} />
    </div>
  </Router>
)

export default Routes
