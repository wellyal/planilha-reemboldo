import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { doSignIn } from '../../../actions'

import SignIn from './SignIn'

const mapStateToProps = ({ signIn }) => ({ signIn })

const mapDispatchToProps = dispatch => bindActionCreators({ doSignIn }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)