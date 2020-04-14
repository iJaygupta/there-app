import React from 'react'
import { Provider } from 'react-redux'
import store from '~/store/'
import App from '~/App'
// import Store from './src/store';

const App = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default App;
