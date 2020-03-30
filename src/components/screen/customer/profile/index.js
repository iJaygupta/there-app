import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Content, Col, Icon } from 'native-base';

import { Card, Image } from '~/components/ui/';
import { Header } from '~/components/common/';
import styles from './styles';

const data = [
  { id: 1, title: 'Phone Number', value: '1234567890', icon: 'md-phone-portrait' },
  { id: 2, title: 'Email', value: 'jhondoe@gmail.com', icon: 'ios-at' },
  // { id: 3, title: 'Corono Enfeted', value: 'negative', icon: 'ios-body' },
  // { id: 4, title: 'In COntact', value: '205', icon: 'md-contacts' },
  { id: 5, title: 'State', value: 'Delhi, India', icon: 'md-navigate' },
];

const profile = props => {

  const components = data.map((item, key) => {
    return (
      <Card
        key={key}
        style={styles.card}
      >
        <Col size={0.8}>
          <Icon name={item.icon} size={25} />
        </Col>
        <Col size={3.2}>
          <Text>{item.value}</Text>
        </Col>
      </Card>
    );
  });

  return (
    <Container style={styles.container}>
      <Header navigationProps={props.navigation} title='Profile' />
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
          {components}
        </View>
      </Content>
    </Container>
  );
};

export default profile;
