import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authenticate } from 'reducers/auth'

import SignIn from './SignIn'

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => bindActionCreators({ authenticate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)