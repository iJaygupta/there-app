import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {

  container: {
    backgroundColor: '#ddd'
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: "#425fe3",
    height: (height / 4.5)
  },
  headerContent: {
    paddingTop: (height / 75),
    alignItems: 'center',
  },
  avatar: {
    width: (width / 4),
    height: (height / 8),
    marginBottom: (height / 78),
  },
  name: {
    fontSize: (height / 38),
    color: "#FFFFFF",
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 10
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 0,
    borderLeftColor: '#425fe3',
    borderLeftWidth: 2,
    borderBottomWidth: 0,
    elevation: 0.5
  },
  icon: {
    marginTop: (height / 75),
    width: (width / 8),
    height: (height / 16),
    borderRadius: 5,
  },
  info: {
    fontSize: (height / 55),
    color: 'black',
    margin: (width / 65),
    padding: (width / 65)
  }
};