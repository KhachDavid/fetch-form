/**
 * This file contains all the api call boilerplates.
 * It also is used to define side effects after getting a response from the backend.
 */

// redux saga imports
import { call, delay, put, select, takeLatest } from "redux-saga/effects";

// constants
import { ALERT_HIDE_DURATION } from "../../constants";

// api calls
import { getForm, postForm } from "../../api/main.api";
import {
  // action types
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_SUCCESS,
  GET_OPTIONS_REQUEST,
  GET_OPTIONS_FAILURE,

  // action creators
  getOptionsSuccess,
  getOptionsFailure,
  createAccountSuccess,
  createAccountFailure,
} from "../actions/form.action";

// status action creators
import {
  setFetchFailure,
  setWaiting,
  setCreationFailure,
  setCreationSuccess,
} from "../actions/status.action";

// selectors
import {
  selectFullName,
  selectEmail,
  selectPassword,
  selectOccupationName,
  selectStateName,
} from "./selectors";

function* createAccountRequestWorker() {
  try {
    yield put(setWaiting(true));
    const fullName = yield select(selectFullName);
    const email = yield select(selectEmail);
    const password = yield select(selectPassword);
    const occupationName = yield select(selectOccupationName);
    const stateName = yield select(selectStateName);

    const data = {
      name: fullName,
      email: email,
      password: password,
      occupation: occupationName,
      state: stateName,
    };

    const response = yield call(postForm, data);

    if (response.status === 201) {
      yield put(createAccountSuccess());
    }
  } catch (error) {
    // trigger failure action
    yield put(createAccountFailure());
  }

  yield put(setWaiting(false));
}

function* createAccountSuccessWorker() {
  yield put(setCreationSuccess(true));

  // in 3 seconds, revert the success state to remove the success message
  yield delay(ALERT_HIDE_DURATION);
  yield put(setCreationSuccess(false));
}

function* createAccountFailureWorker() {
  yield put(setCreationFailure(true));

  // in 3 seconds, revert the failure state to remove the error message
  yield delay(ALERT_HIDE_DURATION);
  yield put(setCreationFailure(false));
}

function* getOptionsRequestWorker() {
  try {
    yield put(setWaiting(true));
    const response = yield call(getForm);
    yield put(getOptionsSuccess(response.data));
  } catch (error) {
    // trigger failure action
    yield put(getOptionsFailure());
  }

  yield put(setWaiting(false));
}

function* getOptionsFailureWorker() {
  yield put(setFetchFailure(true));

  // in 3 seconds, revert the failure state to remove the error message
  yield delay(ALERT_HIDE_DURATION);
  yield put(setFetchFailure(false));
}

export default function* () {
  yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccountRequestWorker);
  yield takeLatest(CREATE_ACCOUNT_SUCCESS, createAccountSuccessWorker);
  yield takeLatest(CREATE_ACCOUNT_FAILURE, createAccountFailureWorker);
  yield takeLatest(GET_OPTIONS_REQUEST, getOptionsRequestWorker);
  yield takeLatest(GET_OPTIONS_FAILURE, getOptionsFailureWorker);
}
