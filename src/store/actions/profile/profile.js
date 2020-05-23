import api from '~/lib/api';
import Path from '~/config/apipath';


const profile = {
  getProfileDetails: function (callback) {
    return dispatch => {
      api.sendExtRequest(Path.userProfile, undefined, true, function (response) {
        dispatch({
          type: 'getProfileDetails',
          data: response.data.data,
          error: false,
          loading: false
        });
        callback(response);
      }, dispatch)
    }
  },
}

export default profile;