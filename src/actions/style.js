// import {API_BASE_URL} from '../config';

export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS';
export const fetchStylesSuccess = style => ({
  type: FETCH_STYLE_SUCCESS,
  style
});

export const fetchStyles = () => dispatch => {
  dispatch(fetchStylesRequest());
  fetch('/api/styles').then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(styles => {
    dispatch(fetchStylesSuccess(styles));
  }).catch(err => {
    dispatch(fetchStylesError(err));
  });
};

