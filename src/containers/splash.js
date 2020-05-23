import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import storage from '~/lib/storage';


class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFirstTimeInstall: true,
      isLogedIn: false
    };
  }

  componentDidMount() {
    storage.getStorage('data').then((res) => {
      const userData = JSON.parse(res);
      const isLogedIn = userData === null ? false : true;
      if (isLogedIn) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default Splash;
