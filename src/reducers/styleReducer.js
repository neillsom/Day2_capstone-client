import {
	FETCH_STYLES,
	FETCH_STYLES_SUCCESS,
	ADD_TO_FAVORITES,
	ADD_TO_FAVORITES_SUCCESS,
	REMOVE_FROM_FAVORITES,
	REMOVE_FROM_FAVORITES_SUCCESS
} from '../actions/styles'

const initialState = {
	styles: [],
	loading: false,
	error: null
};

const styleReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_STYLES:
			return { ...state };
		case FETCH_STYLES_SUCCESS:
			return { ...state, styles: action.styles };
		case ADD_TO_FAVORITES:
			return {...state };
		case ADD_TO_FAVORITES_SUCCESS:
			return {...state };
		case REMOVE_FROM_FAVORITES_SUCCESS:
			return {...state };
		case REMOVE_FROM_FAVORITES:
			return {...state };
		default:
			return state
	}

};

export default styleReducer;

