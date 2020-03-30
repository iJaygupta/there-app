import React from 'react';
import {
  TextInput,
  View,
  Picker,
  StyleSheet
} from "react-native";
import { Icon } from 'native-base';


const phoneInput = (props) => {
  return (
    <View style={styles.pickerContainer}>
      <View style={styles.SectionStyle}>
        <View style={{ flex: 0.2 }}>
          <Icon name={'md-person'} style={styles.ImageStyle} />
        </View>
        <View style={{ flex: 0.6, }}>
          <Picker
            style={styles.picker}
            // selectedValue={this.state.phoneCountry}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)} >
            <Picker.Item label="+91" value="+91" />
            <Picker.Item label="+12" value="+12" />
            <Picker.Item label="+13" value="13" />
            <Picker.Item label="+14" value="+14" />
            <Picker.Item label="+15" value="+15" />
            <Picker.Item label="+16" value="+16" />
          </Picker>
        </View>
        <View style={{ flex: 1, }}>
          <TextInput
            style={styles.input}
            keyboardType={'number-pad'}
            maxLength={15}
            // value={this.state.phoneNumber}
            // onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
            placeholder={'Enter mobile number'}
            // onSubmitEditing={this.loginHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    margin: 30
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  picker: {
    color: '#000',
    textAlign: 'right'
  },
  ImageStyle: {
    margin: 2,
    fontSize: 30,
    color: 'black'
  },
});

export default phoneInput;