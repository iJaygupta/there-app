import { combineReducers } from 'redux';
import Auth from './auth/auth';
import Home from './home/home';
import Profile from './profile/profile';

export default combineReducers({
    Auth,
    Home,
    Profile
});