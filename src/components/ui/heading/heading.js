import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const heading = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ ...styles.heading1, ...props.style }}>
        {props.title}
      </Text>
      <View style={{ ...styles.hrLine, ...props.hrLine }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    margin: 20,
  },
  heading1: {
    fontWeight: '600',
    color: '#aaa',
    fontSize: 22,
    marginLeft: 10
  },
  hrLine: {
    width: 25,
    marginTop:10,
    borderBottomColor: '#aaa',
    borderBottomWidth: 2,
    borderRadius: 10,
    marginLeft: 10
  }
});

export default heading;