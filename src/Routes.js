import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Topbar from 'components/organisms/Topbar'
import SignIn from 'components/pages/SignIn'
import Stylesheet from 'components/pages/Stylesheet'
import Profile from 'components/pages/Profile'

const Routes = ({ store }) => (
  <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/app" component={Topbar} />
      <Route exact path="/app/stylesheet" component={Stylesheet} />
      <Route exact path="/app/profile" component={Profile} />
    </div>
  </Router>
)

export default Routes
