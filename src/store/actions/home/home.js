import api from '~/lib/api';
import { API_END_POINT } from '~/config/env';

const home = {

  getHomePage: function (callback) {
    return dispatch => {
      api.sendRequest(API_END_POINT, null, false, callback, dispatch)
    }
  }
}

export default home;