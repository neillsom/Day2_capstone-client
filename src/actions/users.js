import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const fetchFavoritesSuccess = (favorites) => {
  return {
    type: FETCH_FAVORITES_SUCCESS,
    favorites
  }
}

export const fetchFavoritesFromApi = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users/:userId/favorites`)
    .then(response => response.json())
    .then(favorites => dispatch(fetchFavoritesSuccess(favorites)))
    .catch(error => console.log(error))
  }
}