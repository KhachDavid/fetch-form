import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputNameField = (props) => {
  return (
    <TextField
      value={props.fullName}
      onChange={(e) => props.setFullName(e.target.value)}
      label="Name"
      variant="outlined"
    />
  );
};

InputNameField.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
};

export default InputNameField;
