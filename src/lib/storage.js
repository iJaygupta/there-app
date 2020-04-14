import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  setStorage: function (data) {
    AsyncStorage.setItem('data', JSON.stringify(data));
  },
  removeStorage: function (key) {
    AsyncStorage.removeItem(key);
  },
  getStorage: function (key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(res => {
          if (res !== null) {
            resolve(res);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    })
  }
};

export default storage;