import Signup from '~/components/screen/customer/signup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '~/store/actions/'

const mapStateToProps = state => {
  return {
    userData: state.Auth
  }
}

function mapDispatchToProps(dispatch) {

  return {
    authAction: bindActionCreators(actions.auth, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)