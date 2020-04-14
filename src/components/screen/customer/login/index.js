import React, { Component } from "react";
import { TextInput, View, Picker, TouchableOpacity, Keyboard, ToastAndroid } from "react-native";
import { Container, Text, Button, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'

import { Card } from '~/components/ui';

import styles from './styles';


export default class HomeActivity extends Component {

  constructor() {
    super();
    this.state = {
      phoneCountry: '',
      phoneNumber: '',
      error: false,
      errorMesg: ''
    }
  }

  loginHandler = async () => {
    Keyboard.dismiss();
    if (await this.validateHandler()) {
      this.props.navigation.navigate('Home');
    }
  }

  validateHandler = async () => {
    const phone = await AsyncStorage.getItem('phoneNumber');

    console.log(phone);

    if (this.state.phoneNumber !== phone) {
      if (this.state.phoneNumber === '') {
        this.setState({
          error: true,
          errorMesg: 'Phone number required'
        });
        return false;
      } else {
        this.setState({
          error: true,
          errorMesg: 'Invalid phone number'
        });
        return false;
      }
    } else {
      return true;
    }
  }

  navigateToHome = () => {

    if (this.state.saveData) {
      ToastAndroid.show('Login successfully!', ToastAndroid.LONG);
      this.props.navigation.navigate('Home');
    }

  }

  loginApiCall = () => {

    const { authAction } = this.props;
    const username = this.state.phoneNumber;
    const password = this.state.otp;
    let details = {
      'grant_type': 'password',
      'username': username,
      'password': password,
    };
    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    authAction.login(formBody, this.loginSuccessResponse);

  }

  loginSuccessResponse = (response) => {
    const responseData = response.data;
    if (responseData.success === 1) {
      this.setState({
        userLoginData: responseData.data,
        saveData: true
      });
      this.navigateToHome();
    } else {
      ToastAndroid.show(responseData.message, ToastAndroid.LONG);
    }

  }

  sendNumberForOTP = () => {

    const { authAction } = this.props;
    const countryCode = this.state.phoneCountry;
    const phone = this.state.phoneNumber;
    authAction.otp(countryCode, phone, this.otpResponse);

  }

  otpResponse = (response) => {

    const responseJson = response.data;
    if (responseJson.success) {
      // set state 
      if (responseJson.data.isRegistered) {
        // set state 
      } else {
        // set state 
      }
      ToastAndroid.show('OTP Receive', ToastAndroid.SHORT);
    }

  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>Sign In</Text>
        <Card style={styles.cardView}>
          <View style={styles.pickerContainer}>
            {this.state.error ?
              <Text style={styles.emailError}>
                {this.state.errorMesg}
              </Text>
              :
              null
            }
            <View style={styles.SectionStyle}>
              <View style={{ flex: 0.2 }}>
                <Icon name={'md-person'} style={styles.ImageStyle} />
              </View>
              <View style={{ flex: 0.6, }}>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.phoneCountry}
                  onValueChange={(itemValue, itemIndex) => this.setState({ phoneCountry: itemValue })} >
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
                  value={this.state.phoneNumber}
                  onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                  placeholder={'Enter mobile number'}
                  onSubmitEditing={this.loginHandler}
                />
              </View>
            </View>
            <Button
              style={styles.button}
              onPress={this.loginHandler}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Button>
            <TouchableOpacity
              style={styles.linkTextButton}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text>don't have account?</Text>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </Container>
    );
  }

}