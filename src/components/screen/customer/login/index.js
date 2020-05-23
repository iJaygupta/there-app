import React, { Component } from "react";
import { View, TouchableOpacity, Keyboard, ToastAndroid } from "react-native";
import { Container, Text, Button, Icon } from 'native-base';
import storage from '~/lib/storage';
import { Card, Input } from '~/components/ui';
import styles from './styles';


export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneCountry: 91,
      phoneNumber: '',
      password: '',
      error: false,
      errorMesg: '',
    }
  }

  loginHandler = async () => {
    Keyboard.dismiss();
    if (await this.validateHandler()) {
      this.loginApiCall();
    }
  }

  validateHandler = async () => {
    if (this.state.phoneNumber === '') {
      this.setState({
        error: true,
        errorMesg: 'Phone number required'
      });
      return false;
    }
    if (this.state.password === '') {
      this.setState({
        error: true,
        errorMesg: 'Passsword required'
      });
      return false;
    }
    return true;
  }

  navigateToOTP = () => {
    const phoneNumber = this.state.phoneNumber;
    this.props.navigation.navigate('OTP', { userData: phoneNumber });
  }

  loginApiCall = () => {
    const { authAction } = this.props;
    const username = this.state.phoneCountry + this.state.phoneNumber;
    const password = this.state.password;
    let data = JSON.stringify({
      'mobile': username,
      'password': password,
    });
    authAction.login(data, this.loginSuccessResponse);
  }

  loginSuccessResponse = (response) => {
    const responseData = response.data;
    if (!responseData.error && responseData.code === 4001) {
      const userData = {
        token: responseData.token,
        user_info: responseData.data,
      };
      storage.setStorage('data', userData);
      if (!responseData.data.is_phone_verified) {
        this.getOTP(responseData.token);
      } else {
        this.props.navigation.navigate('Profile');
      }
    } else {
      ToastAndroid.show(responseData.msg, ToastAndroid.LONG);
    }
  }

  getOTP = (token) => {
    const { authAction } = this.props;
    authAction.otp(token, this.otpSuccessResponse);
  }

  otpSuccessResponse = (response) => {
    const responseData = response.data;
    if (!responseData.error) {
      this.navigateToOTP();
      ToastAndroid.show(responseData.msg, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(responseData.msg, ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>Sign In</Text>
        <Card style={styles.cardView}>
          <View style={styles.formContainer}>
            {this.state.error ?
              <Text style={styles.emailError}>
                {this.state.errorMesg}
              </Text>
              :
              null
            }
            <Input
              style={styles.input}
              keyboardType={'number-pad'}
              maxLength={15}
              value={this.state.phoneNumber}
              onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
              placeholder={'Enter mobile number'}
              onSubmitEditing={this.loginHandler}
            >
              <Icon name={'md-person'} style={styles.icon} />
            </Input>
            <Input
              placeholder={'Enter your password'}
              maxLength={8}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            >
              <Icon name={'md-key'} style={styles.icon} />
            </Input>
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