import React from 'react'
import { Image, View } from 'react-native'
import { Header, Title, Button, Left, Icon, Right, Body } from 'native-base'
import { withNavigation } from 'react-navigation';
import styles from './styles'
// import Logo from '../../../assets/logo.png'


const AppHeader = props => {

  const {
    title,
    navigation,
  } = props;

  return (
    <Header style={styles.header}>
      <View style={styles.headerRow}>
        <Left>
          {
            navigation.showBackButton === undefined ?
              <Button
                transparent
                onPress={() => navigation.navigationProps.toggleDrawer()}
              >
                <Icon name="menu" style={styles.menuIcon} />
              </Button>
              :
              <Button
                transparent
                onPress={() => navigation.navigationProps.goBack()}
              >
                <Icon name="arrow-back" style={styles.menuIcon} />
              </Button>
          }
        </Left>
        <Body>
          {
            title === null ?
              {/* <Image source={Logo} style={styles.logo} /> */ }
              :
              <Title style={styles.title}>{navigation.title}</Title>
          }
        </Body>
        {/* <Right >
          <Button
            transparent
            onPress={() => navigation.navigationProps.navigate('Scan')}
          >
            <Icon name="md-qr-scanner" style={styles.cameraIcon} />
          </Button>
        </Right> */}
      </View>
    </Header>
  )
}

class NavigationDrawerStructure extends React.Component {

  render() {
    return (
      <AppHeader navigation={this.props} />
    );
  }
}

export default NavigationDrawerStructure;