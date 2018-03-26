export const SHOWS_FETCH_DATA_SUCCESS = 'SHOWS_FETCH_DATA_SUCCESS';
export const SHOWS_HAS_ERRORED = 'SHOWS_HAS_ERRORED';
export const SHOWS_IS_LOADING = 'SHOWS_IS_LOADING';

export function showsHasErrored(bool) {
    return {
        type: SHOWS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function showsIsLoading(bool) {
    return {
        type: SHOWS_IS_LOADING,
        isLoading: bool
    };
}

export function showsFetchDataSuccess(items) {
    return {
        type: SHOWS_FETCH_DATA_SUCCESS,
        items
    };
}

export function showsFetchData(url) {
  return (dispatch) => {
    dispatch(showsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(showsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => {
        dispatch(showsFetchDataSuccess(items))
      })
      .catch(() => dispatch(showsHasErrored(true)));
  };
}