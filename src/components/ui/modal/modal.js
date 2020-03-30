import React from 'react'
import { Modal , StyleSheet} from 'react-native'
import { Container, Button, Icon, Text, Header, Left, Right } from 'native-base'

const UIModal = props => {
  const {
    title,
    children,
    visibility,
    closeEvent
  } = props
  
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visibility}
    >
      <Container style={styles.modalContainer}>
        <Header 
          style={styles.header} 
          iosBarStyle={"light-content"} 
          noShadow
        >
          <Left>
            <Text style={styles.headerTitle}>
              {title}
            </Text>
          </Left>
          <Right>
            <Button
              iconLeft
              style={styles.modalCloseButton}
              light
              onPress={() => { 
                closeEvent()
              }}
            >
              <Icon 
                name="close" 
                style={styles.modalCloseButtonIcon}
              />
            </Button>
          </Right>
        </Header>
        {children}
      </Container>
    </Modal>
  )
}

export default UIModal


const styles = StyleSheet.create({

    modalContainer: {
      backgroundColor: "#fff",
    },
    modalContent: {
    },
    modalCloseButton: {
      backgroundColor: "transparent",
      alignSelf: "center",
      justifyContent: "center",
      elevation: 0
    },
    modalCloseButtonIcon: {
      fontSize: 30,
      color: "#fff"
    },
    header: {
      backgroundColor: "#d32e2e",
      borderBottomColor: "#fff",
      height: 80
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
      paddingLeft: 10
    }
  });