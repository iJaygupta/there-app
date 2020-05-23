import React from 'react';
import { Root } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import SideBar from './containers/sidebar';

import Login from './containers/customer/login';
import SignUp from './containers/customer/signup';
import OTP from './containers/customer/otp';
import Profile from './containers/customer/profile/';


// Drawer Navigation
const Drawer = createDrawerNavigator(
  {
    Profile: Profile,
  },
  {
    initialRouteName: "Profile",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: Drawer,
  },
  {
    initialRouteName: "Drawer",
    headerMode: 'none',
  }
);

// Auth Component Stack
const AuthNavigator = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    OTP: OTP
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppNavigator,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

const App = () => (
  <Root>
    <AppContainer />
  </Root>
)

export default App;