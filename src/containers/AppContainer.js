import React, { Component } from 'react';
import SignUp from "../components/common/Auth";
import { View, Text, StyleSheet , StatusBar } from 'react-native';

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor="#1c313a"
      barStyle="light-content"/>
      <SignUp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});


