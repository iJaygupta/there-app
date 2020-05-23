import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Footer, Icon, Row } from 'native-base';
import { withNavigation } from 'react-navigation';
import storage from '~/lib/storage';

import styles from './style';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      useremail: '',
      userphone: '',
      pinCode: ''
    };
  }

  logout = async () => {
    storage.removeStorage('data');
    this.props.navigation.navigate('Login');
    return false;
  };

  render() {
    const data = [
      { id: 1, title: "Profile", route: "Profile", icon: "person" },
      { id: 2, title: "Contact Trail", route: "ContactTrail", icon: "md-settings" },
      { id: 3, title: "Near By Devices", route: "DevicesScan", icon: "md-phone-portrait" },
    ];

    const element = data.map((item, key) => {
      return (
        <Row key={key} style={styles.menuList}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(item.route)}
          >
            <Row >
              <Icon name={item.icon} style={styles.menuicon} />
              <View style={styles.menuTitle}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </Row>
          </TouchableOpacity>
        </Row>
      );
    });

    return (
      <Container style={styles.container}>
        <Row size={0.20} >
          <View style={styles.drawerProfileCover}>
            <View style={styles.title}>
              <Text style={styles.nameText}>{this.state.username}</Text>
              <Text style={styles.nameText}>{this.state.useremail}</Text>
              <Text style={styles.nameText}>{this.state.userphone}</Text>
            </View>
          </View>
        </Row>
        <Row size={0.80} >
          <View style={styles.menuContainer}>
            {element}
            <Row key={'logOut'} style={styles.menuList}>
              <TouchableOpacity
                onPress={this.logout}
              >
                <Row >
                  <Icon name={'md-log-out'} style={styles.menuicon} />
                  <View style={styles.menuTitle}>
                    <Text style={styles.text}>log out</Text>
                  </View>
                </Row>
              </TouchableOpacity>
            </Row>
          </View>
        </Row>
        {/* <Footer style={{ backgroundColor: '#fff' }}>
          <Row size={1} style={styles.footerText}>
            <Text style={styles.text}>Version 0.002</Text>
          </Row>
        </Footer> */}
      </Container>
    );
  };

}

export default withNavigation(SideBar);