import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from 'src/containers/AppContainer';
import Store from 'src/store';

const App = () => {
	return (
		<Provider store={Store}>
			<AppContainer />
		</Provider>
	);
};

export default App;
