export const SET_CREATION_SUCCESS = "SET_CREATION_SUCCESS";
export const SET_CREATION_FAILURE = "SET_CREATION_FAILURE";
export const SET_FETCH_FAILURE = "SET_FETCH_FAILURE";
export const SET_WAITING = "SET_WAITING";

export const setCreationSuccess = (payload) => ({
  type: SET_CREATION_SUCCESS,
  payload,
});

export const setCreationFailure = (payload) => ({
  type: SET_CREATION_FAILURE,
  payload,
});

export const setFetchFailure = (payload) => ({
  type: SET_FETCH_FAILURE,
  payload,
});

export const setWaiting = (payload) => ({
  type: SET_WAITING,
  payload,
});
