import createReducer from 'src/lib/CreateReducer';
import { SHOW_LOADER, HIDE_LOADER } from '../constants';

export default createReducer(
	{},
	{
		[SHOW_LOADER](state, action) {
			console.log('Loader Shown', state, action);
			return true;
		},
		[HIDE_LOADER](state, action) {
			console.log('Loader hide', state, action);
			return false;
		},
	},
);
