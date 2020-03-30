import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export default {
  container: {
    backgroundColor: "#fff",
  },
  drawerProfileCover: {
    flex: 1,
    height: height / 6,
    backgroundColor: '#3464a2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerImage: {
    top: (height / 45),
    justifyContent: 'center',
    alignItems: 'center',
    overFlow: 'hidden',
    width: (width / 4),
    height: (height / 8),
    borderRadius: (100 / 2),
  },
  profileImage: {
    width: (width / 7),
    height: (height / 14),
  },
  emailText: {
    marginLeft: (width / 6),
  },
  menuList: {
    marginVertical: 2,
  },
  menuTitle: {
    padding: 2,
    marginVertical: 5,
    marginHorizontal: (height / 52),
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: (height / 46),
    color: '#fff'
  },
  text: {
    fontWeight: '600',
    fontSize: (height / 46),
  },
  footerText: {
    textAlign: "center",
    marginTop: 5
  },
  menuicon: {
    fontSize: (height / 28),
    color: '#3464a2',
    paddingTop: 5,
    paddingLeft: 5
  },
  menuContainer: {
    height: (width - 161),
  },
  userInfo: {
    alignItems: 'flex-end'
  },
  notificationContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end'
  },
  notifyIcon: {
    paddingRight: (width / 25),
    color: '#fff'
  }
};
