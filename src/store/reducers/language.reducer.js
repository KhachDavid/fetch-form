import { availableLanguages } from "../../languages/constants";
import { SET_LANGUAGE } from "../actions/language.action";

const initialState = {
  language: availableLanguages.english,
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
}
