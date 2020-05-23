import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  setStorage: function (key, data) {
    AsyncStorage.setItem(key, JSON.stringify(data));
  },
  removeStorage: function (key) {
    AsyncStorage.removeItem(key);
  },
  getStorage: function (key) {
    const data = AsyncStorage.getItem(key);
    return data;
  },
};

export default storage;