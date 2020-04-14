import { combineReducers } from 'redux';
import Auth from './auth/auth';
import Home from './home/home';

export default combineReducers({
    Auth,
    Home,
});