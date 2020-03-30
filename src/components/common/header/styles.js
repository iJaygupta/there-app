import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: (height / 15)
  },
  headerRow: {
    flex: 1,
    flexDirection: "row"
  },
  menuIcon: {
    fontSize: (width / 17)
  },
  cameraIcon: {
    fontSize: (width / 17)
  },
  title: {
    fontSize: (width / 17)
  }
});
