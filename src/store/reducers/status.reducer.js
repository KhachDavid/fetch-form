import {
  SET_CREATION_SUCCESS,
  SET_CREATION_FAILURE,
  SET_FETCH_FAILURE,
  SET_WAITING,
} from "../actions/status.action";

export const initialState = {
  isCreationSuccess: false,
  isCreationFailure: false,
  isFetchFailure: false,
  isWaiting: false,
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CREATION_SUCCESS:
      return {
        ...state,
        isCreationSuccess: action.payload,
      };

    case SET_CREATION_FAILURE:
      return {
        ...state,
        isCreationFailure: action.payload,
      };

    case SET_FETCH_FAILURE:
      return {
        ...state,
        isFetchFailure: action.payload,
      };

    case SET_WAITING:
      return {
        ...state,
        isWaiting: action.payload,
      };

    default:
      return state;
  }
}
