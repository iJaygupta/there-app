import React, { Component } from "react";
import { View, Keyboard, ToastAndroid } from "react-native";
import { Container, Text, Button, Icon } from 'native-base';
import { Card, Input } from '~/components/ui';
import styles from './styles';

export default class OTP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      error: false,
      errorMessages: ''
    }
  }

  loginHandler = async () => {
    Keyboard.dismiss();
    if (await this.otpValidator()) {
      this.verifiyOTP();
    }
  }

  otpValidator = async () => {
    if (this.state.otp === '') {
      this.setState({
        error: true,
        errorMessages: 'OTP required'
      });
      return false;
    }
    return true;
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Profile');
  }

  verifiyOTP = () => {
    const { authAction, userData } = this.props;
    const token = userData.token;
    const phoneNumber = 91 + this.props.navigation.state.params.userData;
    const userOTP = this.state.otp;
    let data = JSON.stringify({
      'mobile': phoneNumber,
      'code': userOTP,
    });
    authAction.otpValidate(token, data, this.otpSuccessResponse);
  }

  otpSuccessResponse = (response) => {
    const responseData = response.data;
    if (!responseData.error) {
      if (responseData.code === 4012) {
        this.navigateToHome();
      } else {
        this.setState({
          otp: ''
        });
        ToastAndroid.show(responseData.msg, ToastAndroid.LONG);
      }
    } else {
      ToastAndroid.show(responseData.msg, ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>OTP</Text>
        <Card style={styles.cardView}>
          <View style={styles.formContainer}>
            {this.state.error ?
              <Text style={styles.emailError}>
                {this.state.errorMessages}
              </Text>
              :
              null
            }
            <Input
              placeholder={'Enter OTP'}
              maxLength={6}
              value={this.state.otp}
              onChangeText={(otp) => this.setState({ otp })}
            >
              <Icon name={'md-key'} style={styles.icon} />
            </Input>
            <Button
              style={styles.button}
              onPress={this.loginHandler}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Button>
          </View>
        </Card>
      </Container>
    );
  }

}