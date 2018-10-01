import {
	FETCH_FAVORITES_SUCCESS
} from '../actions/users'

const initialState = {
	favorites: [],
	loading: false,
	error: null
};

const userReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'FETCH_FAVORITES_SUCCESS':
			return { ...state, favorites: action.favorites }
		default: 
			return state
	}
};

export default userReducer;