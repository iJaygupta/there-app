import React, { Component } from "react";
import { View, Keyboard, } from "react-native";
import { Container, Text, Button, Icon } from 'native-base';
import storage from '~/lib/storage';
import { Card, Input } from '~/components/ui';
import styles from './styles';


export default class OTP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      error: false,
      errorMesg: ''
    }
  }

  loginHandler = async () => {
    Keyboard.dismiss();
    if (await this.otpValidator()) {
      this.loginApiCall();
    }
  }

  otpValidator = async () => {
    if (this.state.otp === '') {
      this.setState({
        error: true,
        errorMesg: 'OTP required'
      });
      return false;
    }
    return true;
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Profile');
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
    if (!responseData.error) {
      const userData = {
        token: responseData.token,
        user_info: responseData.data,
      };
      storage.setStorage('data', userData);
      this.navigateToHome();
    }
  }

  render() {
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>OTP</Text>
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