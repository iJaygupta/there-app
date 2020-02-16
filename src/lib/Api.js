import axios from 'axios';
import cookie from 'react-cookie';


const self = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
    fingerprint: '',
    setMethod: function (method) {
        self.method = method;
        return self;
    },
    setHeader: function (key, value) {
        self.headers[key] = value;
        return self;
    },
    reset: function () {
        self.method = method;
        self.headers = { 'Content-Type': 'application/json' };
    },
    handleApiError : function(){
        return auth.signout();
    },
    setFingerPrint: function(fingerPrint) {
        self.fingerPrint = fingerPrint;
        return self;
    },
    sendRequest: function(url, data, authenticate, callback, dispatch) {

        if(self.fingerPrint) {
            self.setHeader('fingerPrint', self.fingerPrint)
        } else {
            var fingerPrintFromCookie = (typeof cookie.load('fingerPrint') != 'undefined' ) ? cookie.load('fingerPrint') : ''
            self.setHeader('fingerPrint', fingerPrintFromCookie);
            self.setFingerPrint(fingerPrintFromCookie);
        }
        (authenticate) ? self.setHeader('token', (typeof cookie.load('token') != 'undefined') ? cookie.load('token') : ''):'';
        return axios({
            method: self.method,
            url:process.env.API_URL + url,
            responseType: 'json',
            headers: data,
            timeout: 120000,
            params: (self.method == "GET") ? data : {}
        })
        .then(function (response){
            self.reset();
            if(authenticate){
                if(response.data.code === "CEC4007") {
                    dispatch({
                        type: 'connectionRemoved',
                        data: true
                    });
                }
            }
            callback(response);
        })
        .catch(function (error) {
                dispatch(common.removeNotification());
                dispatch(common.notify("Something went wrong. Please try again later.", 'error'));
             console.error("API LIB ERROR : ", error);   
        });
    },
    sendExtRequest : function(url, data, callback) {
        return axios({
            method: self.method,
            url: url,
            responseType: 'json',
            headers: self.headers,
            data: data,
            timeout : 120000,
            params: (self.method == "GET") ? data : {}
        })
        .then(function (response) {
            self.reset();

            callback(null, response);
        });
    }
}
export default self;