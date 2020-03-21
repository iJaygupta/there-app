import api from '../../../lib/Api';
import apipaths from '../../../lib/Apipath'

const auth = {
    authenticate: function () {
        return {
            type: 'authenticate',
            error: false,
            msg: '',
            isAuthenticate: '',
            isAuthSuccess: true
        }
    },
    login: function (mobile, password, rememberMe, callback) {
        return dispatch => {
            api.setMethod('post').sendRequest(apipaths.logIn, { mobile: mobile, password: password }, false, function (response) {
             console.log(response);
            }, dispatch)
        }
    },
    signUp: function (mobile, password, callback) {
        return dispatch => {
            api.setMethod('post').sendRequest(apipaths.signUp, { mobile: mobile, password: password }, false, function (response) {
                console.log(response);
            }, dispatch)
        }
    },
}
