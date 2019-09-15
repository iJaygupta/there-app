import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function configureStore(initialState = {}) {
	const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
	return createStore(reducer, initialState, enhancer);
}
const store = configureStore();
export default store;
