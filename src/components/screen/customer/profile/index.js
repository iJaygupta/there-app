import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Container, Content, Col, Icon } from 'native-base';
import { Card, Image } from '~/components/ui/';
import { Header } from '~/components/common/';
import styles from './styles';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { profileDetails, profileAction } = this.props;
    profileAction.getProfileDetails(this.getProfileSuccessResponse);
  }

  getProfileSuccessResponse = (response) => {
    console.log('profile =>', response.data);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header navigationProps={this.props.navigation} title='Profile' />
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.avatar} />
            <Text style={styles.name}>
              Jhon Doe
              </Text>
          </View>
        </View>
        <Content>
          <View style={styles.bodyContent}>
            <Card
              style={styles.card}
            >
              <Col size={0.8}>
                <Icon name={'md-contacts'} size={25} />
              </Col>
              <Col size={3.2}>
                <Text>{'Delhi, India'}</Text>
              </Col>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Profile;
