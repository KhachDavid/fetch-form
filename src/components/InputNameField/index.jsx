import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { TextFieldSX, InputLabelProps } from "../../constants/style";

const InputNameField = (props) => {
  return (
    <TextField
      value={props.fullName}
      onChange={(e) => props.setFullName(e.target.value)}
      label="Full Name"
      variant="outlined"
      className={props.className}
      sx={TextFieldSX(props.error)}
      InputLabelProps={InputLabelProps(props.isRequired)}
      error={props.error}
      helperText={props.helperText}
    />
  );
};

InputNameField.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  className: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};

InputNameField.defaultProps = {
  className: "Landing-Name",
  helperText: "",
  error: false,
  isRequired: true,
};

export default InputNameField;
