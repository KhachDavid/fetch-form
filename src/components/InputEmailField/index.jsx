import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputEmailField = (props) => {
  return (
    <TextField
      value={props.email}
      onChange={(e) => props.setEmail(e.target.value)}
      label="Email"
      variant="outlined"
      type="email"
    />
  );
};

InputEmailField.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default InputEmailField;
