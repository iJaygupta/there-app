import api from '~/lib/api';
import Path from '~/config/apipath';

const home = {

  getHomePage: function (callback) {
    return dispatch => {
      api.sendRequest(Path, null, false, callback, dispatch)
    }
  }
}

export default home;