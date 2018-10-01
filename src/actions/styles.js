import { API_BASE_URL } from '../config';

export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS';
export const fetchStylesSuccess = (styles) => {
  return {
    type: FETCH_STYLES_SUCCESS,
    styles
  }
}

// testing

export const fetchStylesFromApi = () => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/styles`)
		.then(response => response.json())
		.then(styles => dispatch(fetchStylesSuccess(styles)))
		.catch(error => console.log(error))
	}
}

export const ADD_TO_FAVORITES_SUCCESS = 'ADD_TO_FAVORITES_SUCCESS';
export const addToFavoritesSuccess = (styles) => {
  return {
    type: ADD_TO_FAVORITES_SUCCESS,
    styles
  }
}

export const addToFavorites = (styleId, token) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users/style/${styleId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        styleId
      })
    })
      .then(response => response.json())
      .then(styles => dispatch(addToFavoritesSuccess(styles)))
      .catch(error => console.log(error));
  };
};

export const REMOVE_FROM_FAVORITES_SUCCESS = 'REMOVE_FROM_FAVORITES_SUCCESS';
export const removeFromFavoritesSuccess = (styleId) => {
  return {
    type: REMOVE_FROM_FAVORITES_SUCCESS,
    styleId
  }
}

export const removeFromFavorites = (styleId, token) => {

  return (dispatch) => {

    fetch(`${API_BASE_URL}/users/style/remove/${styleId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        styleId
      })
    })
      .then(response => response.json())
      .then(styleId => dispatch(removeFromFavoritesSuccess(styleId)))
      .catch(error => console.log(error));
  };
};