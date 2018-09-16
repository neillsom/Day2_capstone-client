'use strict';

const initialState = {
	styles: [],
	loading: false,
	error: null
};

const styleReducer = (state = initialState, action) => {
	if (action.type === actions.CHANGE_FOO) {
		return Object.assign({}, state, {
			foo: 'baz'
		});
	}
	else if (action.type === actions.UNSET_FOO) {
		return Object.assign({}, state, {
			foo: null
		});
	}
	return state;
};

export default styleReducer;