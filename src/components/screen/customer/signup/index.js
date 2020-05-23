import React, { Component } from "react";
import { TextInput, View, Picker, TouchableOpacity, Keyboard, ToastAndroid } from "react-native";
import { Container, Text, Button, Icon } from 'native-base';

import { Card } from '~/components/ui';

import styles from './styles';

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      phoneCountry: '',
      phoneNumber: '',
      name: '',
      password: '',
      error: false,
      errorMesg: ''
    }
  }

  signUpHandler = async () => {
    Keyboard.dismiss();
    if (await this.validateHandler()) {
      this.signUpUserApi();
    }
  }

  validateHandler = async () => {
    if (this.state.phoneNumber === '') {
      this.setState({
        error: true,
        errorMesg: 'Phone number required'
      });
      return false;
    } else if (this.state.name === '') {
      this.setState({
        error: true,
        errorMesg: 'Name required!'
      });
      return false;
    } else if (this.state.password === '') {
      this.setState({
        error: true,
        errorMesg: 'Password required!'
      });
      return false;
    }
    return true;
  }

  navigateToLoginScreen() {
    ToastAndroid.show('SignUp Succesfuly!', ToastAndroid.SHORT);
    const userData = this.state;
    const mobileNumber = 91 + userData.phoneNumber;
    this.props.navigation.navigate('Login', { userData: mobileNumber });
  }

  signUpUserApi = () => {
    const { authAction } = this.props;
    const userData = this.state;
    const mobileNumber = 91 + userData.phoneNumber;
    const data = JSON.stringify({
      name: userData.name,
      mobile: mobileNumber,
      password: userData.password
    });
    authAction.signUp(data, this.signupSuccessResponse);

  }

  signupSuccessResponse = (response) => {
    const responseJson = response.data;
    if (responseJson.code === 4000) {
      this.navigateToLoginScreen();
    } else {
      ToastAndroid.show(responseJson.msg, ToastAndroid.LONG);
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
              maxLength={70}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              placeholder={'Full Name'}
            />
            <TextInput
              style={styles.input}
              keyboardType={'number-pad'}
              maxLength={70}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
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