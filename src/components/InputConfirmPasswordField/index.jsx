import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputConfirmPasswordField = (props) => {
  return (
    <TextField
      value={props.confirmPassword}
      onChange={(e) => props.setConfirmPassword(e.target.value)}
      label="Confirm Password"
      variant="outlined"
      type="password"
    />
  );
};

InputConfirmPasswordField.propTypes = {
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
};

export default InputConfirmPasswordField;
