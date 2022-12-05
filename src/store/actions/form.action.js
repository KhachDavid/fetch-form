export const CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";
export const GET_OPTIONS_REQUEST = "GET_OPTIONS_REQUEST";
export const GET_OPTIONS_SUCCESS = "GET_OPTIONS_SUCCESS";
export const GET_OPTIONS_FAILURE = "GET_OPTIONS_FAILURE";
export const SET_FULL_NAME = "SET_FULL_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_CONFIRM_PASSWORD = "SET_CONFIRM_PASSWORD";
export const SET_OCCUPATION_NAME = "SET_OCCUPATION_NAME";
export const SET_OCCUPATION_LIST = "SET_OCCUPATION_LIST";
export const SET_STATE_NAME = "SET_STATE_NAME";
export const SET_STATE_LIST = "SET_STATE_LIST";

export const createAccountRequest = () => ({
  type: CREATE_ACCOUNT_REQUEST,
})

export const createAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
})

export const createAccountFailure = () => ({
  type: CREATE_ACCOUNT_FAILURE,
})

export const getOptionsRequest = () => ({
  type: GET_OPTIONS_REQUEST,
});

export const getOptionsSuccess = (payload) => ({
  type: GET_OPTIONS_SUCCESS,
  payload,
});

export const getOptionsFailure = (payload) => ({
  type: GET_OPTIONS_FAILURE,
  payload,
});

export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const setOccupationName = (occupationName) => ({
  type: SET_OCCUPATION_NAME,
  payload: occupationName,
});

export const setOccupationList = (occupationList) => ({
  type: SET_OCCUPATION_LIST,
  payload: occupationList,
});

export const setStateName = (stateName) => ({
  type: SET_STATE_NAME,
  payload: stateName,
});

export const setStateList = (stateList) => ({
  type: SET_STATE_LIST,
  payload: stateList,
});
