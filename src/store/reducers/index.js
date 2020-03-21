import { combineReducers } from 'redux';
import auth from '../reducers/auth/Auth'


export const application = combineReducers({
    auth
});

export const initialState = {
    auth: auth({}, { type: "init " })
}