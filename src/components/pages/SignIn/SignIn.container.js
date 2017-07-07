import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin } from 'reducers/signin'

import SignIn from './SignIn'

const mapStateToProps = ({ signin }) => ({ signin })

const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)