import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveStylesheet } from 'reducers/stylesheet'

import Stylesheet from './Stylesheet'

const mapStateToProps = ({ stylesheet }) => ({ stylesheet })

const mapDispatchToProps = dispatch => bindActionCreators({ saveStylesheet }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Stylesheet)