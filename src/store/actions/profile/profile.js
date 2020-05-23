import api from '~/lib/api';
import Path from '~/config/apipath';


const profile = {
  getProfileDetails: function (token, callback) {
    return dispatch => {
      api.setHeader('Authorization', token).sendExtRequest(Path.userProfile, undefined, function (response) {
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