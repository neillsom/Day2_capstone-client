import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const store = createStore(
	rootReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
	applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;