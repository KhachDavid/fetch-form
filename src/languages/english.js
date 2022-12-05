import React from "react";

export const english = {
  ACCOUNT_CREATION_SUCCESS: "Account created successfully!",
  ACCOUNT_CREATION_FAILURE: "Account creation failed!",
  FETCH_FAILURE: "Server error! Please try again later.",
  FULL_NAME_LABEL: "Full Name",
  EMAIL_LABEL: "Email",
  PASSWORD_LABEL: "Password",
  CONFIRM_PASSWORD_LABEL: "Confirm Password",
  OCCUPATION_LABEL: "Occupation",
  STATE_LABEL: "State",
  SIGN_UP_LABEL: "Sign Up",
  EMAIL_HELPER_TEXT: "Invalid Email",
  PASSWORD_HELPER_TEXT: (
    <span>
      - At least 8 characters long
      <br />
      - At least one number
      <br />
      - At least one uppercase letter
      <br />
      - At least one lowercase letter
      <br />
      - No spaces (Check for spaces at the end)
      <br />
    </span>
  ),
  CONFIRM_PASSWORD_ERROR_HELPER_TEXT: "- Passwords do not match",
};
