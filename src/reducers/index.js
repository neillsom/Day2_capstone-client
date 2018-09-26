import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import styleReducer from './styleReducer';
import authReducer from './auth';
import userReducer from './user';


const rootReducer = combineReducers({
	style: styleReducer,
	form: formReducer,
	auth: authReducer, 
	user: userReducer
})

export default rootReducer;