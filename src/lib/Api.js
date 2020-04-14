import axios from 'axios';
import { API_URI } from '~/config/env';

const self = {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
  },
  setMethod: function (method) {
    self.method = method;
    return self;
  },
  setHeader: function (key, value) {
    self.headers[key] = value;
    return self;
  },
  reset: function () {
    self.method = "GET";
    self.headers = { "Content-Type": "application/json" };
    return self;
  },
  sendRequest: function (url, data, authenticate, callback, dispatch) {

    url = API_URI + url;
    return axios({
      method: self.method,
      url: url,
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data,
      timeout: 120000,
      params: (self.method == "GET") ? data : {}
    })
      .then(function (response) {
        self.reset();

        callback(response);
      })
      .catch(function (error) {
        console.error("API LIB ERROR : ", error);
      });
  },
  sendExtRequest: function (url, data, callback, dispatch) {

    return axios({
      method: self.method,
      url: url,
      responseType: 'json',
      headers: self.headers,
      data: data,
      timeout: 120000,
      params: (self.method == "GET") ? data : {}
    })
      .then(function (response) {
        self.reset();

        callback(response);
      })
      .catch(function (error) {
        console.error("API LIB ERROR : ", error);
        callback(error);
      });
  },
  sendFormRequest: function (url, data, callback, dispatch) {

    url = API_URI + url;
    return axios({
      method: self.method,
      url: url,
      responseType: 'json',
      headers: {
        ...self.headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data,
      timeout: 120000,
      params: (self.method == "GET") ? data : {}
    })
      .then(function (response) {
        self.reset();

        callback(response);
      })
      .catch(function (error) {
        console.error("API LIB ERROR : ", error);
      });
  },
}

export default self;