import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import styleReducer from './styleReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
	style: styleReducer,
	form: formReducer,
	auth: authReducer
})

export default rootReducer;