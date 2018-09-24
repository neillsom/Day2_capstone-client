import { combineReducers, createStore } from 'redux';
import styles from './styleReducer';

const rootReducer = combineReducers({
	styles
})

export default rootReducer;

const reducerInitializedStore = createStore(rootReducer);
console.log(reducerInitializedStore.getState());
