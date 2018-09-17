const initialState = {
	styles: [],
	loading: false,
	error: null
};

const styleReducer = (state=initialState, action) => {
	switch (action.type) {
		case '':
			return {}

		default:
			return state
	}
};

export default styleReducer;