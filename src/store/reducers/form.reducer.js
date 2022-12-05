import {
  GET_OPTIONS_SUCCESS,
  SET_FULL_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_OCCUPATION_NAME,
  SET_OCCUPATION_LIST,
  SET_STATE_NAME,
  SET_STATE_LIST,
} from "../actions/form.action.js";

export const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  occupationName: "",
  occupationList: [],
  stateName: "",
  stateList: [],
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OPTIONS_SUCCESS:
      return {
        ...state,
        stateList: action.payload.states,
        occupationList: action.payload.occupations,
        stateName: action.payload.states[0].name,
        occupationName: action.payload.occupations[0],
      };

    case SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };

    case SET_OCCUPATION_NAME:
      return {
        ...state,
        occupationName: action.payload,
      };

    case SET_OCCUPATION_LIST:
      return {
        ...state,
        occupationList: action.payload,
      };

    case SET_STATE_NAME:
      return {
        ...state,
        stateName: action.payload,
      };

    case SET_STATE_LIST:
      return {
        ...state,
        stateList: action.payload,
      };

    default:
      return state;
  }
}
