import {
  SHOWS_FETCH_DATA_SUCCESS,
  SHOWS_HAS_ERRORED,
  SHOWS_IS_LOADING
} from '../actions/shows.es6';

export function showsHasErrored(state = false, action) {
  switch (action.type) {
    case SHOWS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function showsIsLoading(state = false, action) {
  switch (action.type) {
    case SHOWS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function shows(state = [], action) {
  switch (action.type) {
    case SHOWS_FETCH_DATA_SUCCESS:
      return action.items;
    default:
      return state;
  }
}