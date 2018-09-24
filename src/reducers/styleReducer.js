import * as actions from '../actions';

const initialState = {
	styles: [],
	loading: false,
	error: null
};

const styles = (state=initialState, action) => {
	switch (action.type) {
		case 'FETCH_STYLES_SUCCESS':
			return {
				...state,
				styles: action.styles
			}

		default:
			return state
	}

};

export default styles;