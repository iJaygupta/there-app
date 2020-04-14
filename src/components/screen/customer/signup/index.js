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
      email: '',
      name: '',
      pinCode: '',
      otp: '',
      error: false,
      errorMesg: ''
    }
  }

  signUpHandler = async () => {
    Keyboard.dismiss();
    if (await this.validateHandler()) {
      this.saveUserdata();
      this.props.navigation.navigate('Home');
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
    return true;
  }

  navigateToHome() {
    ToastAndroid.show('Login Succesfuly!', ToastAndroid.SHORT);
    this.props.navigation.navigate('Home');
  }

  saveUserdata = async () => {
    try {
      await AsyncStorage.setItem('phoneCountry', this.state.phoneCountry);
      await AsyncStorage.setItem('phoneNumber', this.state.phoneNumber);
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('name', this.state.name);
      await AsyncStorage.setItem('pinCode', this.state.pinCode);
      await AsyncStorage.setItem('otp', this.state.otp);
    } catch (error) {
      console.log('Err to save user data =>', error);
    }
  }

  signUpUserApi = () => {
    const { authAction } = this.props;
    const userData = this.state;
    const data = {
      country_code: userData.phoneCountry,
      name: userData.name,
      phone: userData.phoneNumber,
      otp: userData.otp,
      email: userData.email,
      pincode: userData.pinCode,
    };
    authAction.signUp(data, this.signupSuccessResponse);

  }

  signupSuccessResponse = (response) => {
    const responseJson = response.data;
    if (responseJson.success) {
      const password = parseInt(responseJson.data.password);
      // navigate to home
    } else {
      ToastAndroid.show(responseJson.data.exception, ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>Sign Up</Text>
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
                  keyboardType={'number-pad'}
                  maxLength={15}
                  value={this.state.phoneNumber}
                  onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                  placeholder={'Enter mobile number'}
                  onSubmitEditing={this.loginHandler}
                />
              </View>
            </View>
            <TextInput
              style={styles.input}
              keyboardType={'email-address'}
              maxLength={70}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Email address'}
            />
            <TextInput
              style={styles.input}
              maxLength={70}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              placeholder={'Full Name'}
            />
            <TextInput
              style={styles.input}
              keyboardType={'number-pad'}
              maxLength={6}
              value={this.state.pinCode}
              onChangeText={(pinCode) => this.setState({ pinCode })}
              placeholder={'PIN code'}
            />
            <TextInput
              style={styles.input}
              keyboardType={'number-pad'}
              maxLength={70}
              value={this.state.otp}
              onChangeText={(otp) => this.setState({ otp })}
              placeholder={'OTP'}
            />
            <Button
              style={styles.button}
              onPress={this.signUpHandler}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
            <TouchableOpacity
              style={styles.linkTextButton}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text>Already have account?</Text>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </Container>
    );
  }
}