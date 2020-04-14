import api from '~/lib/api';
import { API_END_POINT, LOGIN_BASIC_KEY } from '~/config/env';


const auth = {
  otp: function (countryCode, mobile, deviceIP, callback) {
    return dispatch => {
      api.setMethod('PUT').sendRequest(API_END_POINT.OTP, { country_code: countryCode, phone: mobile, deviceid: deviceIP }, false, callback, dispatch)
    }
  },
  login: function (data, callback) {
    return dispatch => {
      api.setMethod('POST').setHeader('Authorization', LOGIN_BASIC_KEY).sendFormRequest(API_END_POINT.LOGIN, data, function (response) {
        dispatch({
          type: 'login',
          token: response.data.token,
          userInfo: response.data
        });
        callback(response);
      }, dispatch)
    }
  },
  signUp: function (data, callback) {
    return dispatch => {
      api.setMethod('PUT').sendRequest(API_END_POINT.SIGNUP, data, false, callback, dispatch)
    }
  },
}

export default auth;