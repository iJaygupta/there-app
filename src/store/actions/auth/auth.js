import api from '~/lib/api';
import Path from '~/config/apipath';


const auth = {
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
      api.setMethod('POST').sendRequest(Path.signUp, data, callback, dispatch)
    }
  },
  otp: function (token, callback) {
    return dispatch => {
      api.setHeader('Authorization', token).sendExtRequest(Path.OTP, undefined, false, callback, dispatch)
    }
  },
  otpValidate: function (token, data, callback) {
    return dispatch => {
      api.setMethod('POST').setHeader('Authorization', token).sendExtRequest(Path.OTPValidate, data, false, callback, dispatch)
    }
  }
}

export default auth;