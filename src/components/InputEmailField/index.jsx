import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { TextFieldSX, InputLabelProps } from "../../constants/style";

const InputEmailField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    // check if TextField is on focus
    // if it is, set the email state

    <TextField
      value={props.email}
      onChange={(e) => props.setEmail(e.target.value)}
      label="Email"
      variant="outlined"
      type="email"
      className={props.className}
      InputLabelProps={InputLabelProps(props.isRequired)}
      sx={TextFieldSX(props.error && !isFocused)}
      helperText={props.error && !isFocused ? props.helperText : ""}
      error={props.error && !isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

InputEmailField.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  className: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};

InputEmailField.defaultProps = {
  className: "Landing-Email",
  helperText: "",
  error: false,
  isRequired: true,
};

export default InputEmailField;
