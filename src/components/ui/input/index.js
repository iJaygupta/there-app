import React from 'react';
import { View, TextInput } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const inputBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {props.children}
      </View>
      <View style={{ flex: 0.9, }}>
        <TextInput
          editable={props.editable}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          onBlur={props.onBlur}
          maxLength={props.maxLength}
          onSubmitEditing={props.onSubmitEditing}
          style={[styles.input, props.style]}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '16rem',
    height: '2.2rem',
    borderRadius: 50,
    margin: '0.4rem',
    elevation: 10
  },
  iconContainer: {
    flex: 0.2,
    justifyContent: 'center',
    height: '2.2rem',
  },
  input: {
    minWidth: '20%',
    minHeight: '2.2rem'
  }
});

export default inputBox;
