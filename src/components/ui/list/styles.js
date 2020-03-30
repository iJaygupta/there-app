import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  root: {
    backgroundColor: "#ddd",
    marginTop: 10,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});