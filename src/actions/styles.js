import { API_BASE_URL } from '../config'

export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS';
export const fetchStylesSuccess = (styles) => {
  return {
    type: FETCH_STYLES_SUCCESS,
    styles
  }
}

export const fetchStylesFromApi = () => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/styles`)
		.then(response => response.json())
		.then(styles => dispatch(fetchStylesSuccess(styles)))
		.catch(error => console.log(error))
	}
}

export const addToFavorites = (styleId, token) => {

  return (dispatch) => {

    fetch(`http://localhost:8080/users/style/${styleId}`, {
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
      .then(json => dispatch((json)))
      .catch(error => console.log(error));
  };
};

export const removeFromFavorites = (styleId, token) => {

  return (dispatch) => {

    fetch(`http://localhost:8080/users/style/remove/${styleId}`, {
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
      .then(json => dispatch((json)))
      .catch(error => console.log(error));
  };
};