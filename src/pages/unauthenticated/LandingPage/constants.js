import React from "react";
import { useSelector } from "react-redux";
import {
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setOccupationName,
  setStateName,
} from "../../../store/actions/form.action.js";

import { isEmailValid, isPasswordValid, doPasswordsMatch } from "./utils";
import { SELECT_INPUT, SEVERITY, TEXT_INPUT } from "../../../constants";

import { Snackbar, Alert } from "@mui/material";
import { SnackbarSX } from "../../../constants/style";
import { TEXTFIELD_TYPES } from "../../../components/CustomTextField/constants.js";
import { languages } from "../../../languages";

export const getFormRecipe = () => {
  const fullName = useSelector((state) => state.form.fullName);
  const email = useSelector((state) => state.form.email);
  const password = useSelector((state) => state.form.password);
  const confirmPassword = useSelector((state) => state.form.confirmPassword);
  const occupationName = useSelector((state) => state.form.occupationName);
  const stateName = useSelector((state) => state.form.stateName);
  const occupationList = useSelector((state) => state.form.occupationList);
  const stateList = useSelector((state) => state.form.stateList);
  const currentLanguage = useSelector((state) => state.language.language);

  return [
    {
      formType: TEXT_INPUT,
      className: "Landing-Name",
      label: languages[currentLanguage].FULL_NAME_LABEL,
      type: TEXTFIELD_TYPES.TEXT,
      value: fullName,
      setValue: setFullName,
      error: false, // no error
      helperText: "",
    },
    {
      formType: TEXT_INPUT,
      className: "Landing-Email",
      label: languages[currentLanguage].EMAIL_LABEL,
      type: TEXTFIELD_TYPES.EMAIL,
      value: email,
      setValue: setEmail,
      error: !isEmailValid(email),
      helperText: languages[currentLanguage].EMAIL_HELPER_TEXT,
    },
    {
      formType: TEXT_INPUT,
      className: "Landing-Password",
      label: languages[currentLanguage].PASSWORD_LABEL,
      type: TEXTFIELD_TYPES.PASSWORD,
      value: password,
      setValue: setPassword,
      error: !isPasswordValid(password),
      helperText: languages[currentLanguage].PASSWORD_HELPER_TEXT,
    },
    {
      formType: TEXT_INPUT,
      className: "Landing-Password-Confirm",
      label: languages[currentLanguage].CONFIRM_PASSWORD_LABEL,
      type: TEXTFIELD_TYPES.PASSWORD,
      value: confirmPassword,
      setValue: setConfirmPassword,
      error: !doPasswordsMatch(password, confirmPassword),
      helperText: languages[currentLanguage].CONFIRM_PASSWORD_ERROR_HELPER_TEXT,
    },
    {
      formType: SELECT_INPUT,
      className: "Landing-Occupation",
      label: languages[currentLanguage].OCCUPATION_LABEL,
      name: "occupation",
      options: occupationList,
      value: occupationName,
      setValue: setOccupationName,
    },
    {
      formType: SELECT_INPUT,
      className: "Landing-State",
      label: languages[currentLanguage].STATE_LABEL,
      name: "state",
      options: stateList.map((state) => state.name),
      value: stateName,
      setValue: setStateName,
    },
  ];
};

export const renderAlerts = () => {
  const isCreationFailure = useSelector(
    (state) => state.status.isCreationFailure
  );

  const isFetchFailure = useSelector((state) => state.status.isFetchFailure);

  const isCreationSuccess = useSelector(
    (state) => state.status.isCreationSuccess
  );

  const currentLanguage = useSelector((state) => state.language.language);

  return (
    <>
      <Snackbar anchorOrigin={SnackbarSX} open={isCreationSuccess}>
        <Alert severity={SEVERITY.SUCCESS}>
          {languages[currentLanguage].ACCOUNT_CREATION_SUCCESS}
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={SnackbarSX} open={isCreationFailure}>
        <Alert severity={SEVERITY.ERROR}>
          {languages[currentLanguage].ACCOUNT_CREATION_FAILURE}
        </Alert>
      </Snackbar>

      <Snackbar anchorOrigin={SnackbarSX} open={isFetchFailure}>
        <Alert severity={SEVERITY.ERROR}>
          {languages[currentLanguage].FETCH_FAILURE}
        </Alert>
      </Snackbar>
    </>
  );
};
