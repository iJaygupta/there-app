import Profile from '~/components/screen/customer/profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';

const mapStateToProps = state => {
  return {
    profileDetails: state.Profile,
    authData: state.Auth
  }
};

function mapDispatchToProps(dispatch) {

  return {
    profileAction: bindActionCreators(actions.profile, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);