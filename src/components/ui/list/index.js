import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import styles from './styles';

const data = [
  { id: 1, image: "https://img.icons8.com/cute-clipart/64/000000/open-in-browser.png", title: "Main Dashboard Open In Browser", description: "Main dashboard have more feature, You go through this." },
  { id: 2, image: "https://img.icons8.com/cute-clipart/64/000000/document.png", title: "RFQ Dashboard", description: "RFQ Dashbord Screen, where all details show regarding RFQ." },
  { id: 3, image: "https://img.icons8.com/cotton/64/000000/heck-for-payment.png", title: "Send RFQ for Approval", description: "After create RFQ successfuly, Send this RFQ for approval." },
  { id: 4, image: "https://img.icons8.com/cotton/64/000000/receipt-approved.png", title: "Approved RFQ", description: "After approved RFQ publish this for bidding." },
]

const listComponent = (props) => {

  return (
    <FlatList
      style={styles.root}
      data={data}
      extraData={data}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(item) => {
        const Notification = item.item;
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { }}>
              <Image style={styles.image} source={{ uri: Notification.image }} />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.title}>{Notification.title}</Text>
              </View>
              <Text>{Notification.description}</Text>
            </View>
          </View>
        );
      }} />
  );
}

export default listComponent;