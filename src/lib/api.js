import axios from 'axios';
import Path from '~/config/apipath';
import storage from '~/lib/storage';

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
  sendRequest: function (url, data, callback, dispatch) {

    url = Path.base_url + url;
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
        console.log("API LIB ERROR : ", error);
      });
  },
  sendExtRequest: function (url, data, authonticate, callback, dispatch) {
    url = Path.base_url + url;
    if (authonticate) {
      storage.getStorage('data').then((res) => {
        const userData = JSON.parse(res);
        const token = userData.token;
        self.setHeader('Authorization', token);
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
            console.log("API LIB ERROR : ", error);
            callback(error);
          });
      });
    } else {
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
          console.log("API LIB ERROR : ", error);
          callback(error);
        });
    }
  },
  sendFormRequest: function (url, data, callback, dispatch) {

    url = Path.base_url + url;
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
        console.log("API LIB ERROR : ", error);
      });
  },
}

export default self;