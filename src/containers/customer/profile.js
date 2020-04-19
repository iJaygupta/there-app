import Profile from '~/components/screen/customer/profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';

const mapStateToProps = state => {
  return {
    homeData: state.Home
  }
};

function mapDispatchToProps(dispatch) {

  return {
    homeAction: bindActionCreators(actions.home, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);