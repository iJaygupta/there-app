import React from 'react'
import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux'
import store from '~/store'
import AppContainer from '~/App'

let { width } = Dimensions.get('window');
EStyleSheet.build({
	$rem: width > 340 ? 18 : 16
});

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default App;