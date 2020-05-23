import api from '~/lib/api';
import Path from '~/config/apipath';


const auth = {
  otp: function (countryCode, mobile, deviceIP, callback) {
    return dispatch => {
      api.setMethod('PUT').sendRequest(Path.OTP, { country_code: countryCode, phone: mobile, deviceid: deviceIP }, false, callback, dispatch)
    }
  },
  login: function (data, callback) {
    return dispatch => {
      api.setMethod('POST').sendRequest(Path.logIn, data, function (response) {
        dispatch({
          type: 'login',
          token: response.data.token,
          userInfo: response.data.data,
          error: false,
          loading: false
        });
        callback(response);
      }, dispatch)
    }
  },
  signUp: function (data, callback) {
    return dispatch => {
      api.setMethod('POST').sendRequest(Path.signUp, data,callback, dispatch)
    }
  },
}

export default auth;