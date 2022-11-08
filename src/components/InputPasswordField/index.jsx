import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputPasswordField = (props) => {
  return (
    // create a text field that takes in a password
    // and sets the password state
    <TextField
      value={props.password}
      onChange={(e) => props.setPassword(e.target.value)}
      label="Password"
      variant="outlined"
      type="password"
    />
  );
};

InputPasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default InputPasswordField;
